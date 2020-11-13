---
title: 'Wikilear Tutorial'
layout: 'layouts/feed.njk'
pagination:
  data: collections.tutorial
  size: 3
permalink: 'tutorial{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
paginationPrevText: 'Tutorial più recenti'
paginationNextText: 'Tutorial più vecchi'
paginationAnchor: '#post-list'
---

Gli ultimi tutorial pubblicati sul sito
