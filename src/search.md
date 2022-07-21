---
eleventyNavigation:
  key: search
  parent: Home
  title: Cerca sul sito...
  showLast: (data) => data.showLast | false,
layout: layouts/page.njk
title: Cerca sul sito...
image: /images/search.svg
style: markdown
description: Da questa pagina puoi cercare qualsiasi testo su Wikilear e ottenere informazioni sulla struttura del sito.
---

Stai cercando informazioni generiche su un prodotto o un determinato servizio? Utilizza le [etichette](/tag/) per filtrare tutti gli articoli e i tutorial per argomento (corrisponde al nome dell'etichetta). Se invece vuoi limitare la ricerca ai soli tutorial utilizza i filtri che trovi nella sezione [Tutorial.](/tutorial/) Non dimenticare di consultare anche la sezione [Argomenti principali](/#topics) dove trovi ulteriori informazioni su alcuni programmi o tool.

In alternativa puoi cercare sul sito utilizzando un servizio esterno come Google. Usando l'operatore `site:` puoi dire a Google di mostrare solo i risultati relativi a Wikilear.

{% include 'components/search/search.njk' %}

> Premendo il pulsante **Cerca su Google** vieni reindirizzato a una pagina esterna che mostra tutte le pagine indicizzate da Google in Wikilear per la parola o frase che hai cercato. Per il suo utilizzo valgono i [termini d'uso](https://policies.google.com/terms) e le [norme sulla privacy](https://policies.google.com/privacy) di Google.
