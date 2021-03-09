---
key: Fogli Google
parent: Home
layout: layouts/page.njk
tags:
title: Fogli Google
image: /images/sheets_48dp.png
feed: ""
---
<details>
<summary>
Indice
</summary>

<nav>

- [Panoramica](#panoramica)
- [Cos'è un foglio di calcolo?](#cos'%C3%A8-un-foglio-di-calcolo%3F)
- [Per iniziare](#per-iniziare)
{% if collections.googlesheetstutorial.length %}
- [Tutorial](#tutorial)
{% endif %}
{% if collections.googlesheetstips.length %}
- [Tips and tricks](#tips-and-tricks)
{% endif %}
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</nav>
</details>

## Panoramica

Fogli Google è un foglio di calcolo online che offre collaborazione e condivisione in tempo reale. Puoi aprire, creare e condividere fogli di lavoro da qualsiasi dispositivo, incluso lo smartphone. Tutte le modifiche vengono salvate automaticamente mentre digiti. In qualsiasi momento puoi tornare a una versione precedente o vedere le modifiche apportate (e chi le ha fatte) grazie alla cronologia delle revisioni.

## Cos'è un foglio di calcolo?

Un foglio di calcolo è uno strumento utile e versatile che ti permette di presentare e analizzare vari tipi di informazioni e dati. Un classico esempio è quello della preparazione di un budget aziendale o familiare, ma esistono tanti modi diversi per utilizzare un foglio di calcolo. Puoi usarlo per organizzare informazioni, come le spese di viaggio o una lista della spesa. Creare un tracker per gestire le persone e le attività per un progetto o tenere un registro dei voti o dei compiti a scuola o delle vendite e delle fatture in una piccola impresa.

È possibile utilizzare carta e penna per registrare informazioni simili, ma con un foglio di lavoro digitale puoi facilmente tenere traccia di molte informazioni, analizzare, filtrare e ordinare i dati ed eseguire rapidamente calcoli difficili. Quando compili i dati per un foglio di calcolo, puoi aggiungere le informazioni tu stesso, prenderle da un documento esistente o utilizzare un'altra fonte. In alternativa, puoi scaricare i dati da un'applicazione del computer o da un sito Web direttamente in un foglio di calcolo.

## Per iniziare

Per utilizzare Fogli Google sul tuo computer accedi al tuo account Google e visita la pagina [sheets.google.com](https://sheets.google.com){rel="noopener noreferrer"}

Da disposivo mobile (tablet o telefono) puoi usare anche l'app dedicata. Cerca sul tuo dispositivo questa icona ![icona di Fogli Google]({{image}}){.inline .w-7 .ml-1}. Se non la trovi puoi installare l'app dallo store per il tuo dispositivo usando uno di questi link.

- [Scarica l'app der dispositivi Android](https://play.google.com/store/apps/details?id=com.google.android.apps.docs.editors.sheets){rel="noopener noreferrer"}
- [Scarica l'app per dispositivi iOS (iPhone e iPad)](https://itunes.apple.com/us/app/google-sheets/id842849113){rel="noopener noreferrer"}

{% set tutorials = collections.googlesheetstutorial %}
{% include 'partials/tutorial.njk' %}

{% set tips = collections.googlesheetstips %}
{% include 'partials/tips-and-tricks.njk' %}

## Risorse utili (siti esterni)

- [Guida di Fogli Google](https://support.google.com/docs/topic/9054603){rel="noopener noreferrer"}
- [Community di assistenza (in inglese)](https://support.google.com/docs/community){rel="noopener noreferrer"}
- [BenCollins (in inglese)](https://www.benlcollins.com/){rel="noopener noreferrer"} sito curato da [Ben Collins](https://twitter.com/benlcollins){rel="noopener noreferrer"}, un Google Developer Expert per Fogli Google a Apps Script. Una miniera di informazioni e utili consigli per approfondire la propria conoscenza di Fogli Google.
- [Google Workspace Developers](https://workspacedevs.com/){rel="noopener noreferrer"} un elenco di sviluppatori con competenze specifiche su Google Apps Script e/o i vari prodotti di Google Workspace.

_Credit:_ alcune informazioni sono state tradotte e adattate dal corso online di Google [**Applied Digital Skills**](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education/en/g-suite-certification-sheets-part-1/g-suite-certification-sheets-part-1/introduction-to-g-suite-certification-sheets-part-1.html){rel="noopener noreferrer"}
{.text-sm .mt-8 .mb-0}
