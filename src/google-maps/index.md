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

Google Maps non ha bisogno di presentazioni, è il navigatore per dispositivi mobile più utilizzato al mondo. Uno strumento utile non solo per pianificare itinerari e muoversi in località sconosciute ma anche per trovare luoghi di interesse e attività commerciali. Il tutto grazie al contributo di migliaia di utenti che condividono le loro esperienze e recensioni.

## Per iniziare

Per utilizzare Google Maps sul tuo computer visita la pagina [maps.google.com](https://maps.google.com){rel="noreferrer noopener"}

Da disposivo mobile (tablet o telefono) puoi usare anche l'app dedicata. Cerca sul tuo dispositivo questa icona ![icona di Google Maps]({{image}}){.inline .w-7 .ml-1}. Se non la trovi puoi installare l'app dallo store per il tuo dispositivo usando uno di questi link.

- [Scarica l'app der dispositivi Android](https://play.google.com/store/apps/details?id=com.google.android.apps.maps&hl=it&gl=US){rel="noopener noreferrer"}
- [Scarica l'app per dispositivi iOS (iPhone e iPad)](https://apps.apple.com/it/app/google-maps-gps-e-ristoranti/id585027354){rel="noopener noreferrer"}

## Tutorial

{% for post in collections.googlemapstutorial.slice(0, 3) %}
  - [{{ post.data.title }}]({{ post.url }})
{% endfor %}

[Tutti i tutorial...](tutorial/)



## Risorse utili (siti esterni)

- [Guida di Google Maps](https://support.google.com/maps){rel="noopener noreferrer"}
- [Community di assistenza](https://support.google.com/maps/community){rel="noopener noreferrer"}
