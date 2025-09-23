import CleanCSS from "clean-css";
import { DateTime } from "luxon";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { readFile, stat } from "fs/promises"; // Using fs/promises for async file operations
import { execFile } from "child_process";
import { hash } from 'hasha';
import { minify } from "terser";
import { NODE_ENV, NETLIFY } from "./src/_data/environment.js";
import { parse } from "csv-parse/sync";
import externalLinks from "./src/_transforms/external-links.js";
import optimizeImages from "./src/_transforms/images.js";
import minifyHTML from "./src/_transforms/html.js";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import applyCsp from "./src/_plugins/csp/apply-csp.js";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItAnchor from "markdown-it-anchor";
import dateFilter from "./src/_filters/date-filter.js";
import w3DateFilter from "./src/_filters/w3-date-filter.js";
import sheetFilter from "./src/_includes/components/sheet/filter.js";
import trimHTML from "./src/_filters/trimHTML.js";
import tagIsValid from "./src/_includes/components/tagsList/filter.js";
import includesFilter from "./src/_filters/includes.js";
import postcss from "postcss";
import TailwindCSS from "@tailwindcss/postcss";


export default function (eleventyConfig) {
  // use csv files as data
  // https://maxkoehler.com/posts/eleventy-csv/
  eleventyConfig.addDataExtension("csv", (contents) => {
    const records = parse(contents, {
      columns: false,
      skip_empty_lines: true,
    });
    return records;
  });

  // build CSS before build eleventy pages
  eleventyConfig.on("beforeBuild", () => {
    // Run me before the build starts
    console.log("Building CSS...");
    let css = readFileSync("./src/css/styles.css", { encoding: "utf-8" });
    let result = postcss([TailwindCSS])
      .process(css.toString(), {
        from: "src/css/styles.css",
      })
      .then((result) => {
        mkdirSync("./dist/css", { recursive: true });
        writeFileSync("./dist/css/styles.css", result.css);
        console.log("Done");
      });
    // Copy _header to dist
    // Don't use addPassthroughCopy to prevent apply-csp from running before the _header file has been copied
    try {
      const headers = readFileSync("./_headers", { encoding: "utf-8" });
      mkdirSync("./dist", { recursive: true });
      writeFileSync("dist/_headers", headers);
      console.log("_header copied");
    } catch (error) {
      console.log(
        "[beforeBuild] Something went wrong with the _headers file\n",
        error
      );
    }
  });

  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/video/");
  // copy original images to use with og, twitter metadata and json-ld
  eleventyConfig.addPassthroughCopy("src/images/");

  eleventyConfig.addWatchTarget("./src/css/");

  // copy and optimize Images
  eleventyConfig.addTransform(
    "optimizeImages",
    optimizeImages
  );

  // add noopener noreferrer to external links
  eleventyConfig.addTransform("externalLinks", (content, outputPath) => {
    return externalLinks(content, outputPath, { domain: "www.wikilear.it" });
  });

  // minify HTML only in production
  // optional chaining require NODE 14 >
  if (NODE_ENV?.toUpperCase() == "PRODUCTION") {
    eleventyConfig.addTransform(
      "minifyHTML",
      minifyHTML
    );
  }

  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: {
      tabindex: 0,
    },
  });
  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.addPlugin(applyCsp);

  const options = {
    html: true,
    breaks: true,
    linkify: false,
  };
  let markdownLib = markdownIt(options)
    .disable("code")
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.linkInsideHeader({
        class: "direct-link",
        symbol: `<span aria-hidden="true">#</span>`,
        placement: "after",
      }),
    });

  eleventyConfig.setLibrary("md", markdownLib);

  // https://github.com/google/eleventy-high-performance-blog/blob/60902bfdaf764f5b16b2af62cf10f63e0e74efbc/.eleventy.js#L144
  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Add filters
  eleventyConfig.addFilter(
    "dateFilter",
    dateFilter
  );
  eleventyConfig.addFilter(
    "w3DateFilter",
    w3DateFilter
  );
  eleventyConfig.addFilter(
    "sheet",
    sheetFilter
  );
  eleventyConfig.addFilter("trimHTML", trimHTML);

  // https://www.11ty.dev/docs/quicktips/inline-css/
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // https://www.11ty.dev/docs/quicktips/inline-js/
  eleventyConfig.addNunjucksAsyncFilter(
    "jsmin",
    async function (code, callback) {
      try {
        const minified = await minify(code);
        callback(null, minified.code);
      } catch (err) {
        console.error("Terser error: ", err);
        // Fail gracefully.
        callback(null, code);
      }
    }
  );

  // https://github.com/google/eleventy-high-performance-blog/blob/90bd7820b010d9500830fa5bcb3f33578f700b24/.eleventy.js#L78
  eleventyConfig.addNunjucksAsyncFilter(
    "addHash",
    function (absolutePath, callback) {
      readFile(`dist${absolutePath}`, {
        encoding: "utf-8",
      })
        .then((content) => {
          return hash(content);
        })
        .then((hash) => {
          callback(null, `${absolutePath}?hash=${hash.substring(0, 10)}`);
        })
        .catch((error) => callback(error));
    }
  );

  // filter tags to shows
  eleventyConfig.addFilter(
    "tagIsValid",
    tagIsValid
  );

  // return true if an array includes the searched value
  eleventyConfig.addFilter("includes", includesFilter);

  // Custom filter to check if a string starts with a prefix
  eleventyConfig.addFilter("startsWith", (str, prefix) => {
    return str.startsWith(prefix);
  });

  // https://github.com/google/eleventy-high-performance-blog/blob/624aaa9ede9df609e2d4656f23d819621f5cb464/.eleventy.js#L94

  async function lastModifiedDate(filename) {
    try {
      const { stdout } = await execFile("git", [
        "log",
        "-1",
        "--format=%cd",
        filename,
      ]);
      return new Date(stdout);
    } catch (e) {
      console.error(e.message);
      // Fallback to stat if git isn't working.
      const stats = await stat(filename);
      return stats.mtime; // Date
    }
  }
  // Cache the lastModifiedDate call because shelling out to git is expensive.
  // This means the lastModifiedDate will never change per single eleventy invocation.
  const lastModifiedDateCache = new Map();
  eleventyConfig.addNunjucksAsyncFilter(
    "lastModifiedDate",
    function (filename, callback) {
      const call = (result) => {
        result.then((date) => callback(null, date));
        result.catch((error) => callback(error));
      };
      const cached = lastModifiedDateCache.get(filename);
      if (cached) {
        return call(cached);
      }
      const promise = lastModifiedDate(filename);
      lastModifiedDateCache.set(filename, promise);
      call(promise);
    }
  );

  // https://github.com/google/eleventy-high-performance-blog/blob/624aaa9ede9df609e2d4656f23d819621f5cb464/.eleventy.js#L149
  eleventyConfig.addFilter("sitemapDateTimeString", (dateObj) => {
    const dt = DateTime.fromJSDate(dateObj, { zone: "utc" });
    if (!dt.isValid) {
      return "";
    }
    return dt.toISO();
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/blog/**/*.md")].reverse();
  });

  function compareDate(a, b) {
    let dateA = a.data.updated ? a.data.updated : a.date;
    let dateB = b.data.updated ? b.data.updated : b.date;
    dateA = new Date(dateA);
    dateB = new Date(dateB);
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  // Returns a collection of articles in reverse date order filtered by feed
  eleventyConfig.addCollection("feed", (collection) => {
    return [...collection.getFilteredByGlob("./src/**/*.md")]
      .filter((x) => x.data.feed)
      .reverse();
  });

  return {
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
