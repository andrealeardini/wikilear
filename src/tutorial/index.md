---
  key: Tutorial
  parent: Home
  title: Tutorial
  description: Tutti i tutorial pubblicati sul sito
  layout: layouts/feed.njk
  pagination:
    data: collections.tutorial
    size: 5
  permalink: tutorial{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/
  paginationPrevText: Tutorial più recenti
  paginationNextText: Tutorial più vecchi
  paginationAnchor: #post-list
  feed: ''
  style: markdown
---
I tutorial sono ordinati per data, dal più recente al più vecchio. Oltre ai classici tutorial troverai alcuni [tips and tricks](/tag/tips-and-tricks/) che in poche righe ti spiegano come usare al meglio i programmi o semplificare alcune operazioni. Se cerchi un tutorial per un prodotto specifico utilizza il filtro per prodotto o consulta la pagina dedicata negli [argomenti principali.](/#topics){.mt-4}

<details>
  <summary>
  Filtra per prodotto
  </summary>

<div class="mt-4">

- [Documenti Google](/tutorial/google-docs)
- [Gmail](/tutorial/gmail)
- [Google Maps](/tutorial/google-maps)

</div>

</details>

<div id="post-list" class="heading">
</div>
