---
title: "Lezione 2: Il Cuore della PWA - Introduzione al Service Worker"
description: "Seconda lezione del corso PWA. Scopriamo cos'è un Service Worker, il suo ciclo di vita (registrazione, installazione, attivazione) e come debuggarlo."
date: 2025-10-02
tags: ['pwa-course']
eleventyNavigation:
  key: "Lezione 2: Il Service Worker"
  parent: PWA Course
---

Nella lezione precedente abbiamo reso la nostra app installabile. Ora introduciamo il componente che le conferisce i suoi veri superpoteri: il **Service Worker**. Capire a fondo il suo funzionamento è la chiave per sbloccare le funzionalità più avanzate delle PWA.

#### **Passo 1: Cos'è un Service Worker?**

Un Service Worker è un file JavaScript che il browser esegue in un **thread separato** rispetto alla pagina web. Funziona come un **proxy di rete programmabile**: può intercettare ogni richiesta fatta dalla tua applicazione e decidere cosa fare (lasciarla passare, servire una risposta dalla cache, etc.).

Poiché è separato, non blocca l'interfaccia utente e può continuare a funzionare anche quando l'utente ha chiuso l'app, gestendo notifiche push e sincronizzazioni in background.

<!-- IMMAGINE: Un diagramma di flusso semplice che mostra la pagina web, la rete, e il Service Worker posizionato tra di loro come un proxy. -->
![Diagramma che illustra il ruolo del Service Worker come proxy tra l'applicazione web e la rete.](/images/pwa-course/lesson2-sw-diagram.png)

#### **Passo 2: Il Ciclo di Vita del Service Worker**

Un Service Worker segue un ciclo di vita preciso:

1. **Registrazione (Registering):** Il tuo JavaScript chiede al browser di registrare un file come Service Worker.
2. **Installazione (Installing):** Se il file è nuovo o modificato, il browser tenta di installarlo. Questa fase avviene una sola volta per versione ed è ideale per preparare la cache.
3. **Attivazione (Activating):** Una volta installato, il Service Worker attende di diventare attivo. Lo diventa quando non ci sono più pagine che usano la vecchia versione. Una volta attivo, può controllare le pagine e intercettare gli eventi.

#### **Passo 3: Registrare il nostro Service Worker**

Questo codice va inserito nel nostro file JavaScript principale, `app.js`.

**`app.js`**

```javascript
// Controlla se il browser supporta i Service Worker
if ('serviceWorker' in navigator) {
  // Attendi che la pagina sia stata completamente caricata
  window.addEventListener('load', () => {
    // Registra il file del Service Worker
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registrato con successo:', registration);
      })
      .catch(error => {
        console.log('Registrazione del Service Worker fallita:', error);
      });
  });
}
```

È una best practice registrare il Service Worker dopo l'evento `load` per non rallentare il rendering iniziale della pagina.

#### **Passo 4: Creare il File del Service Worker**

Crea un nuovo file chiamato `sw.js` nella cartella principale del tuo progetto.

**`sw.js`**

```javascript
// Il Service Worker ha un suo scope globale: 'self'
self.addEventListener('install', event => {
  console.log('Service Worker: installazione in corso...');
  // Forza l'attivazione immediata del nuovo Service Worker
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker: attivazione completata. Ora controlla la pagina.');
});

self.addEventListener('fetch', event => {
    // Per ora, non facciamo nulla qui.
});
```

Il codice in `sw.js` ha un suo contesto separato. La variabile globale qui è `self`, non `window`.

#### **Passo 5: Verificare e Debuggare il Ciclo di Vita**

Torniamo al browser e ricarichiamo la pagina.

1. Apri i **DevTools** e vai al pannello **Application -> Service Workers**.
2. Dovresti vedere il tuo `sw.js` elencato, con uno stato "activated and is running".
3. Nella **Console**, vedrai i messaggi di log che abbiamo inserito.

<!-- IMMAGINE: Uno screenshot del pannello Application -> Service Workers nei DevTools, evidenziando lo stato "activated and is running" e la casella di controllo "Update on reload". -->
![Pannello Service Workers nei DevTools di Chrome, con evidenziate le opzioni di debug come 'Update on reload' e 'Unregister'.](/images/pwa-course/lesson2-devtools-sw.png)

**Consiglio Pro:** Durante lo sviluppo, spunta sempre la casella **"Update on reload"**. Questo forza il browser ad aggiornare il Service Worker a ogni ricaricamento della pagina, facendoti risparmiare molto tempo.

#### **Conclusione**

Abbiamo messo in posizione il nostro "proxy". Ora è registrato, attivo e pronto a ricevere istruzioni.

**Nella prossima lezione,** gli daremo il suo primo, vero compito: usare l'evento `install` per mettere in cache l'App Shell e gettare le basi per il funzionamento offline.

[**Prosegui con la Lezione 3: Caching Statico - L'App Shell Immediata**](/link-alla-prossima-lezione/)
