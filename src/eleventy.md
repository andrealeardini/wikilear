---
eleventyNavigation:
  key: 11ty
  parent: Home
  showLast: true
layout: layouts/page.njk
permalink: "11ty/index.html"
title: Eleventy
style: markdown
---

Eleventy è un SGG (Static Site Generator), cioè un generatore di siti statici. Nato come alternativa a Jekyll è diventato in poco tempo lo strumento preferito da molti svluppatori e per la sua facilità d'uso anche da diversi blogger che masticano un po' di HTML, Javascript e CSS.


<details class="direct-link">
<summary class="font-semibold mb-4">
Per iniziare
</summary>

Eleventy può essere installato sia a livello globale, utilizzabile quindi in ogni cartella (directory), che localmente. In questo esempio per semplicità utilizzo una versione installata globalmente, per progetti reali ti consiglio invece di installare Eleventy localmente, specialmente se il progetto verrà condiviso con altri (su GitHub, ecc.).

Apri la shell (tutti gli esempi sono fatti utilizzando bash) e dalla riga di comando crea una cartella di prova (test).

``` bash
mkdir test
cd test
```
Installa Eleventy con il seguento comando (l'opzione `-g` indica che si tratta di un'installazione a livello globale):

``` bash
npm install -g @11ty/eleventy
```

> Eleventy v0.11.1 richiede Node versione 8 o successive.
Puoi controllare la versione in uso sul tuo sistema usando `node --version` dalla riga di comando.

Ora devi creare un template da utilizzare con Eleventy. Per questo semplice esempio ci accontentiamo di una pagina vuota con un titolo. Come formato puoi utilizzare un file in Markdown, uno dei tanti linguaggi supportati da Eleventy. Se vuoi puoi creare il file utilizzando un qualsiasi editor di testo. In questo caso ho utilizzato il comando `echo`.

``` bash
echo '# Titolo della pagina' > README.md
```

Dal momento che hai installato Eleventy globalmente puoi eseguirlo direttamente con il comando:

``` bash
eleventy
```

Dovresti vedere un risultato simile a questo:

``` shell
Writing _site/README/index.html from ./README.md.
Wrote 1 file in 0.11 seconds (v0.11.0)
```

Il funzionamento base  di Eleventy è abbastanza semplice. Cerca nella cartella di input (il valore predefinito è la cartella corrente) e in tutte le sottocartelle tutti i template in uno dei formato gestiti e li compila restituendo per ciascuno un file HTML nella cartella di output (il valore predefinito è _site).

Nel nostro caso ha trovato il file README.md e lo ha compilato nel corrispondente README/index.html nella cartella _site (quella predefinita). Come vedi Eleventy usa il nome del file per creare una cartella al cui interno mette il file index.html che verrà letto dal browser quando visita la pagina.

Insieme con Eleventy viene installato anche un web server (Browsersync). Per avviare il web server utilizza l'ozione  `--serve`.

``` bash
eleventy --serve
```

Per vedere il risultato di Eleventy apri la pagina http://localhost:8080/README/ nel tuo browser.

</details>

<details>
<summary class="font-semibold mb-4">
Tutorial
</summary>

- Crea il tuo primo sito con Eleventy

</details>

<details>
<summary class="font-semibold mb-4">
Risorse utili (siti esterni)
</summary>

- [Guida di Apps Script (in inglese)](https://developers.google.com/apps-script/overview){target="_blank" rel="noopener noreferrer"} la guida di riferimento dove puoi trovare anche diversi codelab e tutorial.
- [Community di assistenza (in inglese)](https://developers.google.com/apps-script/community){target="_blank" rel="noopener noreferrer"} una community semi-ufficiale dove partecipano diversi GDE (Google Developer Expert) e saltuariamente anche qualche dipendente Google.
- [Learn Eleventy From Scratch (in inglese, a pagamento)](https://piccalil.li/course/learn-eleventy-from-scratch/){target="_blank" rel="noopener noreferrer"} uno dei migliori corsi online per costruire da zero un sito con Eleventy.
- [AppsScriptPulse](https://pulse.appsscript.info/) probabilmente il più completo elenco di articoli, addon e altre risorse su Apps Script. Curato da [Martin Hawksey](https://twitter.com/mhawksey){target="_blank" rel="noopener noreferrer"} (Google Developer Expert) e con il contributo della community di Apps Script.
- [Introduction To Google Apps Script (in inglese)](https://courses.benlcollins.com/p/apps-script-blastoff){target="_blank" rel="noopener noreferrer"} un corso introduttivo curato da [Ben Collins](https://twitter.com/benlcollins){target="_blank" rel="noopener noreferrer"}, un Google Developer Expert per Fogli Google e Apps Script.
- [AppsScript Italia](https://support.google.com/docs/community){target="_blank" rel="noopener noreferrer"} guide e articoli in italiano su Google Apps Script curati da [Michele Pisani](https://twitter.com/michelepisani80){target="_blank" rel="noopener noreferrer"}.
- [Fatti di AppsScript](https://www.facebook.com/groups/AppsScript/){target="_blank" rel="noopener noreferrer"} una community italiana su Facebook creata da [Michele Pisani](https://www.facebook.com/michelepisani.it){target="_blank" rel="noopener noreferrer"} dove gli utenti possono dare e ricevere assistenza e supporto.


</details>