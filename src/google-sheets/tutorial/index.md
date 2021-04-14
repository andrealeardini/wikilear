---
  parent: Fogli Google
  key: Google-Sheet-Tutorial
  title: Tutorial
  tags:
  description: Tutti i tutorial per Fogli Google pubblicati sul sito
  layout: layouts/feed.njk
  pagination:
    data: collections.googlesheettutorial
    size: 3
    reverse: true
  permalink: google-sheet/tutorial{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/
  paginationPrevText: Tutorial più recenti
  paginationNextText: Tutorial più vecchi
  paginationAnchor: #post-list
  feed: ''
  style: markdown
---

Tutti i tutorial pubblicati sul sito{.mt-4}

<div id="post-list" class="heading">
</div>
