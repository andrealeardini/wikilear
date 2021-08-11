---
  parent: Google Maps
  key: Google-Maps-Tips
  showLast: true
  override:tags: []
  title: Tips and Tricks
  description: Tutti i tips and tricks per Google Maps pubblicati sul sito.
  layout: layouts/feed.njk
  pagination:
    data: collections.googlemapstips
    size: 3
    reverse: true
  permalink: google-maps/tips-and-tricks{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/
  paginationPrevText: Tips più recenti
  paginationNextText: Tips più vecchi
  paginationAnchor: #post-list
  feed:
  style: markdown
---

{{ description }}{.mt-4}

<div id="post-list" class="heading">
</div>
