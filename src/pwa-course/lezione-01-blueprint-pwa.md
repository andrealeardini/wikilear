---
title: "Lezione 1: Il Blueprint di una PWA - Manifest e architettura App Shell"
description: "Prima lezione del corso PWA. Impariamo a rendere una web app installabile su desktop e mobile usando il Web App Manifest e l'architettura App Shell."
date: 2025-09-01
order: 1
tags: ['pwa-course']
eleventyNavigation:
  key: "Lezione 1: Il Blueprint"
  parent: PWA Course
---

Benvenuto alla prima lezione del nostro corso completo sulle Progressive Web Apps. Oggi getteremo le fondamenta. Partiremo da uno scheletro di applicazione web e la renderemo **installabile**.

Ci concentreremo su due concetti chiave:

* **L'Architettura "App Shell":** Il modello strutturale per garantire caricamenti istantanei.
* **Il Web App Manifest:** Il file di configurazione che trasforma il nostro sito in un'app che può essere aggiunta alla home screen.

Sei pronto a costruire il blueprint della tua prima PWA? Iniziamo.

#### **Passo 1: Setup dell'ambiente di sviluppo**

Prepariamo la struttura del nostro progetto. Crea una cartella e al suo interno organizza i file come segue:

```
pwa-corso/
├── images/
│   └── icons/
│       ├── icon-192x192.png
│       └── icon-512x512.png
├── index.html
├── style.css
└── app.js
```
<!-- IMMAGINE: Uno screenshot della struttura delle cartelle del progetto in un editor come VS Code. -->
![Struttura delle cartelle del progetto PWA](/images/pwa-course/lesson1-folder-structure.png)

Popoliamo i file con del codice di partenza.

**`index.html`**

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PWA Codelab</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>PWA Codelab</h1>
    </header>
    <main>
        <h2>Lezione 1: Blueprint</h2>
        <p>Questa è la nostra App Shell di base.</p>
    </main>
    <script src="app.js"></script>
</body>
</html>
```

**`style.css`**

```css
body { font-family: sans-serif; margin: 0; background-color: #f0f0f0; }
header { background-color: #3f51b5; color: white; padding: 1rem; text-align: center; }
main { padding: 1rem; max-width: 800px; margin: 0 auto; }
```

Per le icone, crea due immagini quadrate `.png` delle dimensioni indicate.

#### **Passo 2: L'architettura "App Shell"**

L'**App Shell** è la parte minima di HTML, CSS e JavaScript necessaria per alimentare l'interfaccia utente. È lo scheletro della tua app: la barra di navigazione, il layout principale, etc. Deve essere leggera e veloce da caricare. Una volta caricata, il contenuto dinamico viene popolato via JavaScript.

#### **Passo 3: Creare il Web App Manifest**

Il `manifest.json` fornisce al browser le informazioni sulla tua applicazione. Crea un nuovo file chiamato `manifest.json` nella root del progetto.

**`manifest.json`**

```json
{
    "name": "PWA Codelab Corso Completo",
    "short_name": "PWA Codelab",
    "description": "Un'app di esempio per il corso PWA.",
    "start_url": ".",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#3f51b5",
    "icons": [
        {
            "src": "images/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
        },
        {
            "src": "images/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
        }
    ]
}
```

* `display: "standalone"` è fondamentale: fa sì che l'app si apra in una sua finestra, senza l'interfaccia del browser.

#### **Passo 4: Collegare il Manifest e i Meta Tag per iOS**

Per collegare il manifest e garantire la compatibilità con iOS, aggiorna la sezione `<head>` del tuo `index.html`.

**`index.html` (sezione `<head>` aggiornata)**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PWA Codelab</title>

    <meta name="theme-color" content="#3f51b5"/>
    <link rel="manifest" href="manifest.json">

    <link rel="apple-touch-icon" href="images/icons/icon-192x192.png">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="PWA Codelab">

    <link rel="stylesheet" href="style.css">
</head>
```

I meta tag `apple-*` sono necessari perché Safari su iOS ha un meccanismo di installazione manuale.

<!-- IMMAGINE: Uno screenshot di Safari su iOS che mostra il menu di condivisione aperto, con un riquadro che evidenzia il pulsante "Aggiungi a schermata Home". -->
![Menu di condivisione di Safari su iOS con l'opzione 'Aggiungi a schermata Home' evidenziata.](/images/pwa-course/lesson1-ios-install.png)

#### **Passo 5: Verifica e installazione**

Avvia un server locale e apri l'app in Chrome.

1. Apri i **DevTools** (F12) e vai al pannello **Application -> Manifest**. Se tutto è corretto, vedrai i dati del tuo manifest.
<!-- IMMAGINE: Uno screenshot del pannello Application -> Manifest nei DevTools, con un riquadro che evidenzia le proprietà del manifest caricate correttamente. -->
![Pannello Manifest nei DevTools di Chrome che mostra le proprietà della PWA caricate correttamente.](/images/pwa-course/lesson1-devtools-manifest.png)

2. Nella barra degli indirizzi, vedrai l'**icona di installazione**. Cliccala per installare l'app.
<!-- IMMAGINE: Uno screenshot della barra degli indirizzi di Chrome che mostra chiaramente l'icona di installazione. -->
![Icona di installazione di una PWA visibile nella barra degli indirizzi del browser Chrome.](/images/pwa-course/lesson1-install-icon.png)

Una volta installata, troverai la sua icona sulla home screen o sul desktop, pronta per essere avviata come un'app nativa.

<!-- IMMAGINE: Un'immagine composita che mostra l'icona della PWA sulla home screen di uno smartphone Android e sul desktop di un PC. -->
![Confronto tra l'icona della PWA installata sulla home screen di uno smartphone e sul desktop di un computer.](/images/pwa-course/lesson1-installed-icons.png)

#### **Conclusione**

Congratulazioni! Hai costruito le fondamenta della tua prima PWA. Ora è installabile e si apre in una finestra dedicata.

**Nella prossima lezione,** daremo vita alla nostra PWA introducendo il suo componente più potente: il **Service Worker**.

[**Prosegui con la Lezione 2: Il Cuore della PWA - Introduzione al Service Worker**](/link-alla-prossima-lezione/)
