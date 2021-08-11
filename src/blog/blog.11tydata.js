module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: (data) => data.key | "Tutti gli articoli",
      parent: (data) => data.parent,
      showLast: true,
    },
  },
  layout: "layouts/post.njk",
  main: "blog",
  feed: "true",
  style: "markdown",
  parent: "Blog",
  collection: "blog"
};
