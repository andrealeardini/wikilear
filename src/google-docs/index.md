---
key: Documenti Google
parent: Home
layout: layouts/page.njk
title: Documenti Google
image: /images/docs_48dp.png
feed:
---
<details>
<summary>
Indice
</summary>

<nav>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
{% if collections.googledocstutorial.length %}
- [Tutorial](#tutorial)
{% endif %}
{% if collections.googledocstips.length %}
- [Tips and tricks](#tips-and-tricks)
{% endif %}
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</nav>
</details>

## Panoramica

Documenti Google è un elaboratore di testi online che offre collaborazione e condivisione in tempo reale. Puoi aprire, creare e condividere documenti da qualsiasi dispositivo, incluso uno smartphone. E dato che Documenti Google è basato sul Cloud, il tuo lavoro viene salvato automaticamente e non dovrai più ricordarti di premere il pulsante Salva.

## Per iniziare

Per utilizzare Documenti sul tuo computer accedi al tuo account Google e visita la pagina [docs.google.com](https://docs.google.com){rel="noopener noreferrer"}

Da disposivo mobile (tablet o telefono) puoi usare anche l'app dedicata. Cerca sul tuo dispositivo questa icona ![icona di Documenti Google]({{image}}){.inline .w-6 .ml-1}. Se non la trovi puoi installare l'app dallo store per il tuo dispositivo usando uno di questi link.

- [Scarica l'app der dispositivi Android](https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.docs){rel="noopener noreferrer"}
- [Scarica l'app per dispositivi iOS (iPhone e iPad)](https://itunes.apple.com/app/apple-store/id842842640){rel="noopener noreferrer"}

{% set tutorials = collections.googledocstutorial %}
{% include 'partials/tutorial.njk' %}

{% set tips = collections.googledocstips %}
{% include 'partials/tips-and-tricks.njk' %}

## Risorse utili (siti esterni)

- [Guida di Documenti Google](https://support.google.com/docs/topic/9046002){rel="noopener noreferrer"}
- [Community di assistenza (in inglese)](https://support.google.com/docs/community){rel="noopener noreferrer"}
