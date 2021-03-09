---
  parent: Gmail
  key: Gmail-Tutorial
  tags:
  title: Tutorial
  description: Tutti i tutorial per Gmail pubblicati sul sito
  layout: layouts/feed.njk
  pagination:
    data: collections.gmailtutorial
    size: 3
    reverse: true
  permalink: gmail/tutorial{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/
  paginationPrevText: Tutorial più recenti
  paginationNextText: Tutorial più vecchi
  paginationAnchor: #post-list
  feed: ''
---

Tutti i tutorial per Gmail pubblicati sul sito{.mt-4}

<div id="post-list" class="heading">
</div>
