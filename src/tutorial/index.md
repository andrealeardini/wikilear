---
title: 'Wikilear Tutorial'
layout: 'layouts/feed.njk'
pagination:
  data: collections.tutorial
  size: 7
permalink: 'tutorial{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
paginationPrevText: 'Tutorial più recenti'
paginationNextText: 'Tutorial più vecchi'
paginationAnchor: '#post-list'
feed: ''
---

Gli ultimi tutorial pubblicati sul sito
