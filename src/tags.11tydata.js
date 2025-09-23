export default {
  eleventyComputed: {
    eleventyNavigation: {
      key: function (data) {
          return String(data.tag);
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
