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
      showLast: (data) => data.showLast | false,
    },
  },
  layout: "layouts/post.njk",
  feed: "true",
  style: "markdown",
  tags: "Gmail",
  collection: "Gmail",
  breadcumb: {
    item1: {
      name: "Gmail",
      item: "/gmail/",
    },
  },
};
