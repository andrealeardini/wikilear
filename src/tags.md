---
eleventyNavigation:
  parent: Tag
  showLast: (data) => data.showLast | false,
title: "Tag Archive"
layout: "layouts/feed.njk"
pagination:
  data: collections
  size: 1
  alias: tag
  filter:
    [
      "all",
      "nav",
      "blog",
      "eleventytips",
      "eleventytutorial",
      "gmailtutorial",
      "gmailtips",
      "googledocstips",
      "googledocstutorial",
      "googledrivetips",
      "googledrivetutorial",
      "googlemapstips",
      "googlemapstutorial",
      "googlesheetstips",
      "googlesheetstutorial",
      "otherstips",
      "otherstutorial",
      "post",
      "posts",
      "tagList",
      "tailwindtips",
      "tailwindtutorial",
      "tips",
      "Tips and Tricks",
      "tutorial",
      "Tutorial",
    ]
permalink: "/tag/{{ tag | slug }}/"
---
