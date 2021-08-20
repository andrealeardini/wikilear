---
key: Google Drive
parent: Home
layout: layouts/page.njk
override:tags: []
title: Google Drive
image: /images/drive_48dp.png
feed:
share: true
---
<details>
<summary>
Contenuto
</summary>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
{% if collections.googledrivestutorial.length %}
- [Tutorial](#tutorial)
{% endif %}
{% if collections.googledrivestips.length %}
- [Tips and tricks](#tips-and-tricks)
{% endif %}
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</details>

## Panoramica

Google Drive è un servizio di archiviazione file basato su cloud che ti consente di gestire, organizzare, modificare e condividere file. Invece di essere archiviati sul tuo computer, i tuoi file di Google Drive vengono archiviati nel Cloud, un luogo sicuro su Internet dove puoi salvare informazioni importanti. Una volta salvato qualcosa nel Cloud, puoi accedervi facilmente da qualsiasi computer, smartphone o tablet con accesso a Internet.

## Per iniziare

Per utilizzare Drive accedi al tuo account Google e visita la pagina [drive.google.com](https://drive.google.com){rel="noopener noreferrer"}

Da disposivo mobile (tablet o telefono) puoi usare anche l'app dedicata. Cerca sul tuo dispositivo questa icona ![icona di Google Drive]({{image}}){.inline .w-6 .ml-1}. Se non la trovi puoi installare l'app dallo store per il tuo dispositivo usando uno di questi link.

- [Scarica l'app der dispositivi Android](https://play.google.com/store/apps/details?id=com.google.android.apps.docs){rel="noopener noreferrer"}
- [Scarica l'app per dispositivi iOS (iPhone e iPad)](https://itunes.apple.com/us/app/google-drive-free-online-storage/id507874739){rel="noopener noreferrer"}

{% set tutorials = collections.googledrivetutorial %}
{% include 'partials/tutorial.njk' %}

{% set tips = collections.googledrivestips %}
{% include 'partials/tips-and-tricks.njk' %}
## Risorse utili (siti esterni)

- [Guida di Google Drive](https://support.google.com/drive){rel="noopener noreferrer"}
- [Community di assistenza (in inglese)](https://support.google.com/drive/community){rel="noopener noreferrer"}
</details>

_Credit:_ alcune informazioni sono state tradotte e adattate dal corso online di Google [**Applied Digital Skills**](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education/en/g-suite-certification-drive/g-suite-certification-drive/introduction-to-g-suite-certification-drive.html){rel="noopener noreferrer"}
{class="text-sm mt-8 mb-0"}