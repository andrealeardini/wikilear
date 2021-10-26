/**
 * Copyright (c) 2021 Andrea Leardini
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Copyright (c) 2020 Google Inc
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const CleanCSS = require("clean-css");
const { DateTime } = require("luxon");
const fs = require("fs");
const { promisify } = require("util");
const hasha = require("hasha");
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);
const execFile = promisify(require("child_process").execFile);
const { minify } = require("terser");
const environment = require("./src/_data/environment");
const parse = require("csv-parse/lib/sync");
const postcss = require("postcss");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = function (eleventyConfig) {
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
  eleventyConfig.on('beforeBuild', () => {
    // Run me before the build starts
    let css = fs.readFileSync("src/css/styles.css", { encoding: "utf-8"});
    result = postcss([tailwindcss, autoprefixer ]).process(css.toString(), {
      from: "src/css/styles.css"
    }).then((result) => {
      fs.mkdirSync("./dist/css", { recursive: true });
      fs.writeFileSync("./dist/css/styles.css", result.css);
      console.log("Fatto");
    });
  });

  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/video/");
  // copy original images to use with og, twitter metadata and json-ld
  eleventyConfig.addPassthroughCopy("src/images/");

  // copy and optimize Images
  eleventyConfig.addTransform(
    "optimizeImages",
    require("./src/_transforms/images")
  );

  // minify HTML only in production
  // optional chaining require NODE 14 >
  if (environment?.NODE_ENV?.toUpperCase() == "PRODUCTION") {
    eleventyConfig.addTransform(
      "minifyHTML",
      require("./src/_transforms/html")
    );
  }

  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"), {
    preAttributes: {
      tabindex: 0
    },
  });
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  eleventyConfig.addPlugin(require("./src/_plugins/csp/apply-csp.js"));

  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const markdownItAnchor = require("markdown-it-anchor");
  const options = {
    html: true,
    breaks: true,
    linkify: false,
  };
  let markdownLib = markdownIt(options)
    .disable("code")
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
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
    require("./src/_filters/date-filter.js")
  );
  eleventyConfig.addFilter(
    "w3DateFilter",
    require("./src/_filters/w3-date-filter.js")
  );
  eleventyConfig.addFilter("sheet", require("./src/_includes/components/sheet/filter.js"));
  eleventyConfig.addFilter("trimHTML", require("./src/_filters/trimHTML.js"));

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
  eleventyConfig.addNunjucksAsyncFilter("addHash", function (
    absolutePath,
    callback
  ) {
    readFile(`dist${absolutePath}`, {
      encoding: "utf-8",
    })
      .then((content) => {
        return hasha.async(content);
      })
      .then((hash) => {
        callback(null, `${absolutePath}?hash=${hash.substr(0, 10)}`);
      })
      .catch((error) => callback(error));
  });

  // filter tags to shows
  eleventyConfig.addFilter(
    "tagIsValid",
    require("./src/_includes/components/tagsList/filter")
  );

  // return true if an array includes the searched value
  eleventyConfig.addFilter("includes", require("./src/_filters/includes"));

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

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false,
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
