module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.title,
      parent: (data) => data.parent,
      showLast: true,
    },
  },
  layout: "layouts/post.njk",
  main: "blog",
  feed: "true",
  style: "markdown",
  parent: "Blog",
};
