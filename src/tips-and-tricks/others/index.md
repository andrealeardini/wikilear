---
  key: Others
  parent: Tips and Tricks
  title: Altri prodotti
  description: I tips and tricks pubblicati sul sito che non appartengono a uno degli argomenti principali.
  layout: layouts/feed.njk
  pagination:
    data: collections.othertips
    size: 5
  permalink: /tips-and-tricks/others{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/
  paginationPrevText: Tips and tricks più recenti
  paginationNextText: Tips and tricks più vecchi
  paginationAnchor: #post-list
  feed: ''
  style: markdown
---
{{ description }}


<div id="post-list" class="heading">
</div>
