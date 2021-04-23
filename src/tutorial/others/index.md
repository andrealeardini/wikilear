---
  key: Others-Tutorial
  parent: Tutorial
  title: Altri prodotti
  override:tags: [Tutorial]
  description: I tutorial pubblicati sul sito che non appartengono a uno degli argomenti principali.
  layout: layouts/feed.njk
  pagination:
    data: collections.otherstutorial
    size: 5
    reverse: true
  permalink: /tutorial/others{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/
  paginationPrevText: Tutorial più recenti
  paginationNextText: Tutorial più vecchi
  paginationAnchor: #post-list
  feed:
---
{{ description }}


<div id="post-list" class="heading">
</div>
