module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: function (data) {
        if (data.key) {
          return data.key;
        } else {
          return data.title;
        }
      },
      parent: (data) => data.parent,
      title: function (data) {
        if (data.key) {
          return data.title;
        }
      },
      showLast: true,
    },
  },
  layout: "layouts/post.njk",
  feed: "true",
  style: "markdown",
  parent: "Tips and Tricks",
};
