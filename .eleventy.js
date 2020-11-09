module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addWatchTarget("./src/js/");
  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
