const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-rss"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-plugin-syntaxhighlight"));
  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));

  eleventyConfig.addPlugin(require("./src/_11ty/img-dim.js"));

  const markdownIt = require("markdown-it");
  const markdownItAttrs = require("markdown-it-attrs");
  const markdownItAnchor = require("markdown-it-anchor");
  const options = {
    html: true,
    breaks: true,
    linkify: true,
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
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // Returns a collection of blog posts in reverse date order
  eleventyConfig.addCollection("blog", (collection) => {
    return [...collection.getFilteredByGlob("./src/blog/**/*.md")].reverse();
  });

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
