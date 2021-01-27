---
eleventyNavigation:
  key: Tailwind CSS
  parent: Home
  showLast: true
layout: layouts/page.njk
title: Tailwind CSS
image: /images/tailwindcss-mark.svg
style: markdown
---
<details>
<summary>
Indice
</summary>

<nav>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
- [Tutorial](#tutorial)
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</nav>
</details>

## Panoramica

Tailwind CSS è un Framework CSS che si distingue dai competitor (Bootstrap in primis) per la sua filosofia [Utility-First](https://tailwindcss.com/docs/utility-first){rel="noopener noreferrer"}.

## Per iniziare

La configurazione di Tailwind varia in base al progetto in cui deve essere integrato. Nella maggior parte dei casi si ottiene la massima versatilità installandolo come plugin di **PostCSS.** Oltre a PostCSS è raccomdandata anche l'installazione di **autoprefixer** dal momento che Tailwind non aggiunge in automatico i prefissi per i vari vendor.

Installa Tailwind e le sue dipendenze con il comando:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
```

Crea un file CSS e usa la direttiva `@tailwind` per iniettare gli stili per **base, component** e **utilities** di Tailwind.

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Aggiungi le utility di Tailwind direttamente nel tuo markup HTML

```html
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
  <div class="flex-shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="WLChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">Wikilear Chat</div>
    <p class="text-gray-500">Hai un nuovo messaggio!</p>
  </div>
</div>
```

## Tutorial

- In preparazione

## Risorse utili (siti esterni)

- [Tailwind CSS (in inglese)](https://tailwindcss.com/docs){rel="noopener noreferrer"} documentazione ufficiale di Tailwind
- [Tailwind Labs (in inglese)](https://www.youtube.com/tailwindlabs){rel="noopener noreferrer"} canale YouTube ufficiale di Tailwind

_Credit:_ alcune informazioni sono state tradotte e adattate dal sito ufficiale di [Tailwind CSS](https://tailwindcss.com/){rel="noopener noreferrer"}
{class="text-sm mt-8 mb-0"}