---
  key: Others
  parent: Tips and Tricks
  showLast: true
  title: Altri prodotti
  tags: Tips and Tricks
  description: I tips and tricks pubblicati sul sito che non appartengono a uno degli argomenti principali.
  layout: layouts/feed.njk
  pagination:
    data: collections.otherstips
    size: 5
    reverse: true
  permalink: /tips-and-tricks/others{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/
  paginationPrevText: Tips and tricks più recenti
  paginationNextText: Tips and tricks più vecchi
  paginationAnchor: #post-list
  feed:
---
{{ description }}


<div id="post-list" class="heading">
</div>
