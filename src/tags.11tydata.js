module.exports = {
  eleventyComputed: {
    eleventyNavigation: {
      key: function (data) {
          return 123;
      },
      parent: (data) => data.parent,
      title: function (data) {
          return data.tag;
      },
      showLast: (data) => data.showLast | false,
    },
  },
  layout: "layouts/page.njk",
  parent: "Etichette",
  feed: "true",
  style: "markdown",
};
