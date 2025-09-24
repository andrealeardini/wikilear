---
title: "Lezione 4: Caching Dinamico e Storage dei Dati"
description: "Quarta lezione del corso PWA. Costruiamo una Note-PWA funzionante, usando IndexedDB per salvare i dati dell'utente e implementando strategie di caching dinamico per le API."
date: 2025-10-04
tags: ['pwa-course']
eleventyNavigation:
  key: "Lezione 4: Dati Dinamici"
  parent: PWA Course
---

Nella lezione precedente abbiamo reso la nostra App Shell immortale. Ora, la trasformeremo in un'applicazione dinamica e funzionale, la nostra `Note-PWA`. Impareremo a salvare i dati creati dall'utente in un database locale e a gestire i dati provenienti da un server.

#### **Passo 0: Creare un Mock Server (Opzionale ma Raccomandato)**

Per rendere i nostri esempi realistici, useremo un semplice server Node.js. Se non l'hai già fatto, crea un file `server.js` nel tuo progetto per simulare un backend.

**`server.js`**

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
let notes = []; // Database in memoria

// Endpoint per ottenere le note
app.get('/api/notes', (req, res) => res.json(notes));

// Endpoint per aggiungere una nota
app.post('/api/notes', (req, res) => {
    const newNote = { ...req.body, id: Date.now() };
    notes.push(newNote);
    res.status(201).json(newNote);
});

app.listen(port, () => console.log(`Server in ascolto su http://localhost:${port}`));
```

Avvia il server con `node server.js` dopo aver installato le dipendenze (`npm install express body-parser`).

#### **Passo 1: Aggiornare l'UI per l'App di Note**

Trasformiamo la nostra interfaccia in quella di un'app per appunti.

**`index.html` (aggiorna il `<body>`)**

```html
<body>
    <header><h1>Note-PWA</h1></header>
    <main>
        <form id="add-note-form">
            <input type="text" id="note-title" placeholder="Titolo della nota" required>
            <textarea id="note-content" placeholder="Scrivi qui..." required></textarea>
            <button type="submit">Aggiungi Nota</button>
        </form>
        <div id="notes-list"></div>
    </main>
    <script src="app.js"></script>
</body>
```

Aggiungi anche qualche stile CSS per rendere il tutto più gradevole.

#### **Passo 2: Scegliere uno Storage Locale - IndexedDB**

Per salvare le note, `localStorage` non è sufficiente. Useremo **IndexedDB**, un vero database NoSQL asincrono disponibile nel browser. La sua API nativa è verbosa, quindi useremo la libreria wrapper **`idb`** di Jake Archibald.

Scarica `idb.js` da un CDN e salvalo nella root del progetto, poi includilo in `index.html` **prima** di `app.js`.

#### **Passo 3: Creare e Gestire il Database**

Creiamo un file separato `db.js` per la logica del database.

**`db.js`**

```javascript
const DB_NAME = 'note-pwa-db';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

const dbPromise = idb.openDB(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
    }
  },
});

async function addNote(note) {
  const db = await dbPromise;
  await db.add(STORE_NAME, note);
}

async function getAllNotes() {
  const db = await dbPromise;
  return await db.getAll(STORE_NAME);
}
```

Includi `db.js` in `index.html` (dopo `idb.js` e prima di `app.js`).

#### **Passo 4: Collegare l'UI al Database**

Ora, in `app.js`, facciamo interagire l'interfaccia con le funzioni del database.

**`app.js`**

```javascript
// ... registrazione Service Worker ...

const form = document.getElementById('add-note-form');
const notesList = document.getElementById('notes-list');

async function displayNotes() {
    const notes = await getAllNotes();
    notesList.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.innerHTML = `<h3>${note.title}</h3><p>${note.content}</p>`;
        notesList.appendChild(noteElement);
    });
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newNote = {
        title: document.getElementById('note-title').value,
        content: document.getElementById('note-content').value,
    };
    await addNote(newNote);
    form.reset();
    await displayNotes();
});

displayNotes();
```

<!-- IMMAGINE: Uno screenshot del pannello Application -> IndexedDB nei DevTools, che mostra il database note-pwa-db e l'object store notes con qualche dato di esempio. -->
![Pannello IndexedDB nei DevTools che mostra la struttura del database per la Note-PWA.](/images/pwa-course/lesson4-indexeddb.png)

#### **Passo 5: Caching Dinamico per le API**

Ora gestiamo i dati che provengono dal server. Vogliamo che l'app mostri i dati dalla cache se la rete non è disponibile. Aggiorniamo l'evento `fetch` in `sw.js`.

**`sw.js` (evento `fetch` aggiornato)**

```javascript
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Strategia "Network falling back to cache" per le API
  if (requestUrl.pathname.startsWith('/api/')) {
    event.respondWith(
      caches.open('pwa-dynamic-cache').then(cache => {
        return fetch(event.request).then(networkResponse => {
          // Se la rete funziona, metto in cache la risposta fresca
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        }).catch(() => {
          // Se la rete fallisce, cerco nella cache
          return cache.match(event.request);
        });
      })
    );
    return;
  }

  // Strategia Cache-First per tutto il resto (App Shell)
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
```

Questa strategia prova prima a contattare la rete. Se fallisce (perché siamo offline), restituisce l'ultima versione dei dati salvata nella cache dinamica.

#### **Conclusione**

La nostra `Note-PWA` è ora un'applicazione pienamente funzionale che salva e legge dati. Ma cosa succede se un utente crea una nota mentre è offline?

**Nella prossima lezione,** risolveremo questo problema con la **Background Sync API**.

[**Prosegui con la Lezione 5: Sincronizzazione in Background**](/link-alla-prossima-lezione/)
