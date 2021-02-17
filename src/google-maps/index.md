---
key: Google Maps
parent: Home
layout: layouts/page.njk
title: Google Maps
image: /images/maps_48dp.png
style: markdown
feed: ""
---
<details>
<summary>
Indice
</summary>

<nav>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
- [Tutorial](tutorial)
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</nav>
</details>

## Panoramica

Google Maps...

## Per iniziare

Per utilizzare Documenti visita la pagina maps.google.com

Da disposivo mobile (tablet o telefono) puoi usare anche l'app dedicata.
- [Scarica l'app der dispositivi Android](https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.docs){rel="noopener noreferrer"}
- [Scarica l'app per dispositivi iOS (iPhone e iPad)](https://itunes.apple.com/app/apple-store/id842842640){rel="noopener noreferrer"}

## Tutorial

{% for post in collections.googlemapstutorial.slice(0, 3) %}
  - [{{ post.data.title }}]({{ post.url }})
{% endfor %}

[Tutti i tutorial...](tutorial/)



## Risorse utili (siti esterni)

- [Guida di Documenti Google](https://support.google.com/docs/topic/9046002){rel="noopener noreferrer"}
- [Community di assistenza (in inglese)](https://support.google.com/docs/community){rel="noopener noreferrer"}
