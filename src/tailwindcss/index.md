---
eleventyNavigation:
  key: Tailwind CSS
  parent: Home
  showLast: (data) => data.showLast | false,
layout: layouts/page.njk
title: Tailwind CSS
image: /images/tailwindcss.png
style: markdown
share: true
---

<details open>
<summary>
Contenuto
</summary>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</details>

## Panoramica

Tailwind CSS è un Framework CSS che si distingue per il suo approccio [Utility-First](https://tailwindcss.com/docs/utility-first). Non dispone di componenti pronti all'uso ma fornisce delle classi predefinite per applicare gli stili CSS direttamente nel markup HTML. Il vantaggio principale è quello di non perdere tempo nell'inventarsi nomi di classi fantasiosi e allo stesso tempo permette di definire un design system completamente personalizzato ma vincolato a valori predefiniti.

Superato il primo impatto, Tailwind CSS permette di creare velocemente prototipi di pagine o elementi HTML. Ma non si limita a questo, può essere usato anche in progetti complessi con il notevole vantaggio che qualsiasi programmatore che conosce Tailwind CSS è in grado di comprendere gli stili applicati ai vari elementi leggendo direttamente il markup HTML.

## Per iniziare

Il modo più semplice e veloce per iniziare a utilizzare Tailwind CSS da zero è con lo strumento Tailwind CLI (l'interfaccia a riga di comando di Tailwind CSS).

1. **Installa Tailwind CSS**
   Installa `tailwindcss` tramite npm e crea il file `tailwind.config.js`

   **Terminale**{class="text-sm"}

   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

2. **Configura i percorsi dei modelli**
   Aggiungi i percorsi a tutti i tuoi modelli nel file `tailwind.config.js`. Se utilizzi le classi di Tailwind CSS in altri file, ad esempio in file javascript, aggiungi anche i percorsi di questi file.

   **tailwind.config.js**{class="text-sm"}

   ```bash
   module.exports = {
     content: ["./src/**/*.{html,js}"],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

3. **Aggiungi le direttive Tailwind al tuo CSS**
   Aggiungi le direttive `@tailwind` per ciascuno dei layer di Tailwind al tuo file CSS principale.

   **src/input.css**{class="text-sm"}

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

4. **Avvia il processo di compilazione di Tailwind CLI**
   Esegui lo strumento CLI per cercare le classi utilizzate nei tuoi modelli e creare il corrispondente codice CSS. Utilizza l'opzione `--watch` per indicare a Tailwind CLI di ricompilare il file CSS in caso di modifiche ai modelli.

   **Terminale**{class="text-sm"}

   ```bash
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

5. **Aggiungi le utility di Tailwind direttamente nel tuo markup HTML**
   Aggiungi il tuo file CSS compilato nella sezione `<head>` e inizia a utilizzare le classi di utilità di Tailwind per definire lo stile del tuo contenuto.

   **src/index.html**{class="text-sm"}

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link href="/dist/output.css" rel="stylesheet" />
     </head>
     <body>
       <h1 class="text-3xl font-bold underline">Hello world!</h1>
     </body>
   </html>
   ```

## Risorse utili (siti esterni)

- [Tailwind CSS (in inglese)](https://tailwindcss.com/docs) documentazione ufficiale di Tailwind
- [Tailwind Labs (in inglese)](https://www.youtube.com/tailwindlabs) canale YouTube ufficiale di Tailwind

_Credit:_ alcune informazioni sono state tradotte e adattate dal sito ufficiale di [Tailwind CSS](https://tailwindcss.com/)
{class="text-sm mt-8 mb-0"}
