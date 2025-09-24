---
title: "Lezione 3: Caching Statico - L'App Shell Immediata"
description: "Terza lezione del corso PWA. Impariamo a usare l'API Cache e l'evento 'install' del Service Worker per pre-caricare le risorse statiche e rendere la nostra app velocissima e disponibile offline."
date: 2025-10-03
tags: ['pwa-course']
eleventyNavigation:
  key: "Lezione 3: Caching Statico"
  parent: PWA Course
---

Ora che il nostro Service Worker è attivo, è il momento di sfruttarlo per risolvere uno dei problemi più sentiti del web: la dipendenza dalla rete. L'obiettivo di oggi è implementare il **precaching**: metteremo in cache le risorse statiche della nostra App Shell per rendere l'avvio dell'app quasi istantaneo e funzionante offline.

#### **Passo 1: L'API Cache (Cache Storage API)**

L'**API Cache** è uno spazio di archiviazione a nostra disposizione nel browser. Ci permette di salvare coppie di oggetti `Request` e `Response` (in pratica, file e risposte di rete). Possiamo creare diverse "casseforti" (cache) con nomi diversi per organizzare i nostri file.

#### **Passo 2: Mettere in Cache l'App Shell durante l'Installazione**

Il momento perfetto per salvare i file è durante l'evento `install` del Service Worker. Modifichiamo il nostro file `sw.js`.

**`sw.js`**

```javascript
const CACHE_NAME = 'pwa-codelab-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  console.log('Service Worker: installazione in corso...');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aperta:', CACHE_NAME);
        return cache.addAll(URLS_TO_CACHE);
      })
  );

  self.skipWaiting();
});

// ... (activate event) ...
```

**Analisi del codice:**

* `CACHE_NAME`: È una best practice includere un numero di versione. Quando vorremo aggiornare i file, ci basterà cambiare questo nome.
* `event.waitUntil()`: Dice al browser di non completare l'installazione finché la Promise al suo interno (l'apertura e il popolamento della cache) non è stata risolta con successo.
* `cache.addAll()`: Prende l'array di URL, fa una richiesta di rete per ciascuno e salva la risposta nella cache. È un'operazione atomica: se anche un solo file fallisce, l'intera operazione viene annullata.

#### **Passo 3: Servire i File dalla Cache**

Abbiamo i file in cassaforte, ma l'app non li sta ancora usando. Dobbiamo istruire il Service Worker su come rispondere alle richieste, usando l'evento `fetch`. Implementeremo la strategia **"Cache first, falling back to network"**.

Modifichiamo l'evento `fetch` in `sw.js`.

**`sw.js` (evento `fetch` aggiornato)**

```javascript
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se una risposta viene trovata nella cache, la restituiamo.
        if (response) {
          return response;
        }
        // Altrimenti, eseguiamo la richiesta di rete originale.
        return fetch(event.request);
      })
  );
});
```

* `event.respondWith()`: Intercetta la richiesta e ci permette di fornire una nostra risposta personalizzata.
* `caches.match(event.request)`: Cerca una corrispondenza per la richiesta corrente in tutte le cache. Se la trova, restituisce la risposta salvata, altrimenti `undefined`.

#### **Passo 4: Verificare il Risultato**

Assicurati che l'opzione "Update on reload" sia attiva nei DevTools.

1. **Ricarica la pagina.**
2. Apri i **DevTools -> Application -> Cache Storage**. Vedrai la tua cache (`pwa-codelab-cache-v1`) con tutti i file salvati.

<!-- IMMAGINE: Uno screenshot del pannello Application -> Cache Storage, che mostra la cache creata e l'elenco dei file al suo interno. -->
![Pannello Cache Storage nei DevTools che mostra un elenco di file dell'App Shell salvati nella cache.](/images/pwa-course/lesson3-cache-storage.png)

3. Ora vai nel pannello **Network**. Ricarica di nuovo. Nella colonna "Size", vedrai che le risorse sono servite **"(from Service Worker)"**. Non sono state richieste alla rete!

<!-- IMMAGINE: Uno screenshot del pannello Network, con un riquadro che evidenzia la colonna "Size" dove appare la dicitura "(from Service Worker)". -->
![Pannello Network nei DevTools che mostra le risorse caricate direttamente dal Service Worker.](/images/pwa-course/lesson3-network-panel.png)

**La Prova Definitiva:** Nel pannello Network, spunta la casella **"Offline"** e ricarica la pagina. L'app si caricherà lo stesso!

#### **Conclusione**

Abbiamo appena reso la nostra App Shell resiliente alla rete e incredibilmente veloce.

**Nella prossima lezione,** affronteremo la gestione dei dati dinamici. Introdurremo **IndexedDB** e costruiremo la logica della nostra `Note-PWA`.

[**Prosegui con la Lezione 4: Caching Dinamico e Storage dei Dati**](/link-alla-prossima-lezione/)
