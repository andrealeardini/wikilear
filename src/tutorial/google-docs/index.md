---
  parent: Tutorial
  key: Docs-Tutorial
  title: Google Documenti
  description: Tutti i tutorial per Google Documenti pubblicati sul sito
  layout: layouts/feed.njk
  pagination:
    data: collections.google-docs-tutorial
    size: 3
  permalink: tutorial/google-docs{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/
  paginationPrevText: Tutorial più recenti
  paginationNextText: Tutorial più vecchi
  paginationAnchor: #post-list
  feed: ''
  style: markdown
---

Tutti i tutorial pubblicati sul sito{.mt-4}

<div id="post-list" class="heading">
</div>
