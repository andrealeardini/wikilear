export default {
  eleventyComputed: {
    eleventyNavigation: {
      key: function (data) {
        if (data.key) {
          return String(data.key);
        } else {
          return String(data.title);
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
    "eleventyNavigation.key": (data) => {
      if (data.key) {
        return String(data.key);
      } else {
        return String(data.title);
      }
    },
    "eleventyNavigation.parent": (data) => data.parent,
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
