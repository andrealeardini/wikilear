---
eleventyNavigation:
  key: Tutorial
  parent: Home
  showLast: true
title: 'Tutorial'
description: Tutti i tutorial pubblicati sul sito
layout: 'layouts/feed.njk'
pagination:
  data: collections.tutorial
  size: 5
permalink: 'tutorial{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
paginationPrevText: 'Tutorial più recenti'
paginationNextText: 'Tutorial più vecchi'
paginationAnchor: '#post-list'
feed: ''
---

Gli ultimi tutorial pubblicati sul sito

<div id="post-list" class="heading">
</div>