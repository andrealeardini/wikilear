---
  parent: Fogli Google
  key: Google-Sheet-Tutorial
  showLast: true
  title: Tutorial
  override:tags: []
  description: Tutti i tutorial per Fogli Google pubblicati sul sito
  layout: layouts/feed.njk
  pagination:
    data: collections.googlesheetstutorial
    size: 3
    reverse: true
  permalink: google-sheets/tutorial{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/
  paginationPrevText: Tutorial più recenti
  paginationNextText: Tutorial più vecchi
  paginationAnchor: #post-list
  feed: ''
  style: markdown
---

Tutti i tutorial pubblicati sul sito{.mt-4}

<div id="post-list" class="heading">
</div>
