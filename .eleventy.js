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
const stat = promisify(fs.stat);
const execFile = promisify(require("child_process").execFile);
const { minify } = require("terser");
const environment = require("./src/_data/environment");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/video/");

  // copy and optimize Images
  eleventyConfig.addTransform(
    "optimizeImages",
    require("./src/_transforms/images")
  );

  const param = environment.NODE_ENV;

  // minify HTML only in production
  // optional chaining require NODE 14 >
  if (environment?.NODE_ENV?.toUpperCase() == "PRODUCTION") {
    eleventyConfig.addTransform(
      "minifyHTML",
      require("./src/_transforms/html")
    );
  }

  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const markdownItAnchor = require("markdown-it-anchor");
  const options = {
    html: true,
    breaks: true,
    linkify: false,
  };
  let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItAnchor, {
      permalink: true,
      permalinkClass: "direct-link",
      permalinkSymbol: "#",
    });
  eleventyConfig.setLibrary("md", markdownLib);

  // Add filters
  eleventyConfig.addFilter(
    "dateFilter",
    require("./src/_filters/date-filter.js")
  );
  eleventyConfig.addFilter(
    "w3DateFilter",
    require("./src/_filters/w3-date-filter.js")
  );

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

  eleventyConfig.addFilter("tagIsValid", function (value) {
    let reject = [
      "all",
      "blog",
      "codelabs",
      "gmailtutorial",
      "googledocstutorial",
      "googledrivetutorial",
      "googlemapstutorial",
      "feed",
      "othertips",
      "tagList",
      "Tips and Tricks",
      "tips",
      "tutorial",
      "Tutorial"
    ];
    return !reject.includes(value);
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

  // Returns a collection of tips and trick posts in reverse date order
  // use as alias for pagination to avoid bugs
  eleventyConfig.addCollection("tips", (collection) => {
    return [...collection.getFilteredByTag("Tips and Tricks")].reverse();
  });

  // Returns a collection of others tips and tricks in reverse date order
  eleventyConfig.addCollection("othertips", (collection) => {
    return [...collection.getFilteredByGlob("./src/tips-and-tricks/others/**/*.md")].reverse();
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/blog/**/*.md")].reverse();
  });

  // Returns a collection of Google Maps Tutorials in reverse date order
  eleventyConfig.addCollection("googlemapstutorial", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/google-maps/tutorial/**/*.md"),
    ].reverse();
  });

  // Returns a collection of Google Docs Tutorials in reverse date order
  eleventyConfig.addCollection("googledocstutorial", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/google-docs/tutorial/**/*.md"),
    ].reverse();
  });

  // Returns a collection of Google Drive Tutorials in reverse date order
  eleventyConfig.addCollection("googledrivetutorial", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/google-drive/tutorial/**/*.md"),
    ].reverse();
  });

  // Returns a collection of Gmail Tutorials in reverse date order
  eleventyConfig.addCollection("gmailtutorial", (collection) => {
    return [
      ...collection.getFilteredByGlob("./src/gmail/tutorial/**/*.md"),
    ].reverse();
  });

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
