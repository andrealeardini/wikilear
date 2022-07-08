---
key: Gmail
parent: Home
layout: layouts/page.njk
override:tags: []
title: Gmail
image: /images/gmail_48dp.png
feed: ""
share: true
---
<details open>
<summary>
Contenuto
</summary>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
{% if collections.gmailtutorial.length %}
- [Tutorial](#tutorial)
{% endif %}
{% if collections.gmailtips.length %}
- [Tips and tricks](#tips-and-tricks)
{% endif %}
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</details>

## Panoramica

Gmail è un servizio gratuito di posta elettronica di Google. Puoi accedere alla posta da qualsiasi dispositivo utilizando il browser oppure con le app dedicate (Android, iOS).

## Per iniziare

Per utilizzare Gmail sul tuo computer accedi al tuo account Google e visita la pagina [mail.google.com](https://mail.google.com){rel="noopener noreferrer"}

Da disposivo mobile (tablet o telefono) puoi usare anche l'app dedicata. Cerca sul tuo dispositivo questa icona ![icona di Gmail]({{image}}){.inline .w-6 .ml-1}. Se non la trovi puoi installare l'app dallo store per il tuo dispositivo usando uno di questi link.

- [Scarica l'app der dispositivi Android](https://play.google.com/store/apps/details?id=com.google.android.gm){rel="noopener noreferrer"}
- [Scarica l'app per dispositivi iOS (iPhone e iPad)](https://apps.apple.com/it/app/gmail-email-by-google/id422689480){rel="noopener noreferrer"}

{% set tutorials = collections.gmailtutorial %}
{% include 'partials/tutorial.njk' %}

{% set tips = collections.gmailtips %}
{% include 'partials/tips-and-tricks.njk' %}

## Risorse utili (siti esterni)

- [Guida di Gmail](https://support.google.com/mail){rel="noopener noreferrer"}
- [Community di assistenza](https://support.google.com/mail/community){rel="noopener noreferrer"}
