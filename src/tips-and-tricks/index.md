---
  key: Tips and Tricks
  parent: Home
  title: Tips and Tricks
  tags: Tips and Tricks
  description: Tutti i tips and tricks pubblicati sul sito
  layout: layouts/feed.njk
  pagination:
    data: collections.tips
    size: 5
    reverse: true
  permalink: /tips-and-tricks{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/
  paginationPrevText: Tips and tricks più recenti
  paginationNextText: Tips and tricks più vecchi
  paginationAnchor: #post-list
  feed:
---
I tips and triks in poche righe ti spiegano come usare al meglio i programmi o semplificare alcune operazioni. Sono ordinati per data, dal più recente al più vecchio. Se cerchi un suggerimento per un prodotto specifico utilizza il filtro per prodotto o consulta la pagina dedicata negli [argomenti principali.](/#topics){.mt-4}

<details>
  <summary>
  Filtra per prodotto
  </summary>

<div class="mt-4">

{% if collections.googledocstips.length %}
- [Documenti Google](/google-docs/tips-and-tricks/)
{% endif %}
- [Gmail](/gmail/tips-and-tricks/)
- [Google Maps](/google-maps/tips-and-tricks/)
- [Altri prodotti](others)

</div>

</details>

<div id="post-list" class="heading">
</div>
