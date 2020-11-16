---
title: 'Blog'
layout: 'layouts/feed.njk'
pagination:
  data: collections.blog
  size: 5
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/'
paginationPrevText: 'Post più recenti'
paginationNextText: 'Post più vecchi'
paginationAnchor: '#post-list'
feed: ''
---

Le ultime notizie riportate sul sito: