---
key: 11ty
parent: Home
layout: layouts/page.njk
override:tags: []
description: Tutorial, Tips and Tricks su Eleventy
permalink: "/11ty/"
title: Eleventy
image:  /images/11ty.svg
feed:
share: true
---

<details>
<summary>
Indice
</summary>

<nav>

- [Panoramica](#panoramica)
- [Per iniziare](#per-iniziare)
{% if collections.eleventytutorial.length %}
- [Tutorial](#tutorial)
{% endif %}
{% if collections.eleventytips.length %}
- [Tips and tricks](#tips-and-tricks)
{% endif %}
- [Risorse utili](<#risorse-utili-(siti-esterni)>)

</nav>
</details>

## Panoramica

Eleventy è un **SSG (Static Site Generator),** cioè un generatore di siti statici. Nato come alternativa **JavaScript** a Jekyll è diventato in poco tempo lo strumento preferito da molti svluppatori e per la sua facilità d'uso anche da diversi blogger che masticano un po' di HTML, Javascript e CSS. Anche Wikilear (il sito che stai leggendo) è stato rifatto da zero usando Eleventy e Tailwind CSS.

Eleventy è **zero-config** per impostazione predefinita, quindi può essere utilizzato fin da subito senza nessuna particolare configurazione. Per progetti più complessi è possibile personalizzare Eleventy aggiungendo un file di configurazione e volendo anche vari plugin.

Un generatore di siti statici permette di creare con facilità un sito partendo da alcuni template (modelli per la generazione delle pagine). A differenza di altre soluzioni, Eleventy **non è un Framework Javascript,** non richiede dipendenze lato client ma lavora dietro le quinte in fase di creazione del sito. Come template vengono utilizzati **moderni template engine indipendenti** da Eleventy. Questo garantisce la **completa portabilità** del progetto nel caso si intenda usare un altro SSG.

Eleventy **lascia ampia libertà sul linguaggio di template** che si può usare. Volendo puoi usarne anche più di uno contemporaneamente inserendo per esempio del codice Nunjucks in un file Markdown. I template inoltre possono essere integrati con **dati esterni** o tramite un **front matter** nel file.

<details>
<summary>
Elenco dei linguaggi di template utilizzabili
</summary>

- HTML (\*.html)
- Markdown (\*.md)
- JavaScript (\*.11ty.js)
- Liquid (\*.liquid)
- Nunjucks (\*.njk)
- Handlebars (\*.hbs)
- Mustache (\*.mustache)
- EJS (\*.ejs)
- Haml (\*.haml)
- Pug (\*.pug)

</details>

## Per iniziare

Eleventy può essere installato sia a livello globale, utilizzabile quindi in ogni cartella (directory), che localmente. In questo esempio per semplicità utilizzo una versione installata globalmente, per progetti reali ti consiglio invece di installare Eleventy localmente, specialmente se il progetto verrà condiviso con altri (su GitHub, ecc.).

Apri la shell (tutti gli esempi sono fatti utilizzando bash) e dalla riga di comando crea una cartella di prova (test).

```bash
mkdir test
cd test
```

Installa Eleventy con il seguento comando (l'opzione `-g` indica che si tratta di un'installazione a livello globale):

```bash
npm install -g @11ty/eleventy
```

> Eleventy v0.12.1 richiede **Node versione 10** o successive.
> Puoi controllare la versione in uso sul tuo sistema usando `node --version` dalla riga di comando.

Ora devi creare un template da utilizzare con Eleventy. Per questo semplice esempio ci accontentiamo di una pagina vuota con un titolo. Come formato puoi utilizzare un file in Markdown, uno dei tanti linguaggi supportati da Eleventy. Se vuoi puoi creare il file utilizzando un qualsiasi editor di testo. In questo caso ho utilizzato il comando `echo`.

```bash
echo '# Titolo della pagina' > README.md
```

Dal momento che hai installato Eleventy globalmente puoi eseguirlo direttamente con il comando:

```bash
eleventy
```

Dovresti vedere un risultato simile a questo:

```shell
Writing _site/README/index.html from ./README.md.
Wrote 1 file in 0.11 seconds (v0.12.1)
```

Il funzionamento base di Eleventy è abbastanza semplice. Cerca nella cartella di input (il valore predefinito è la cartella corrente) e in tutte le sottocartelle tutti i template in uno dei formato gestiti e li compila restituendo per ciascuno un file HTML nella cartella di output (il valore predefinito è \_site).

Nel nostro caso ha trovato il file **README.md** e lo ha compilato nel corrispondente **README/index.html** nella cartella **\_site** (quella predefinita). Come vedi Eleventy usa il nome del file per creare una cartella al cui interno mette il file index.html che verrà letto dal browser quando visita la pagina.

Insieme con Eleventy viene installato anche un web server (Browsersync). Per avviare il web server utilizza l'ozione `--serve`.

```bash
eleventy --serve
```

Per vedere il risultato di Eleventy apri la pagina [http://localhost:8080/README/](http://localhost:8080/README/) nel tuo browser.

{% set tutorials = collections.eleventytutorial %}
{% include 'partials/tutorial.njk' %}

{% set tips = collections.eleventytips %}
{% include 'partials/tips-and-tricks.njk' %}


## Risorse utili (siti esterni)

- [Documentazione ufficiale (in inglese)](https://www.11ty.dev/docs/){target="\_blank" rel="noopener noreferrer"} la guida di riferimento di Eleventy.
- [Tutorial (in inglese)](https://www.11ty.dev/docs/tutorials/){target="\_blank" rel="noopener noreferrer"} un corposo elenco di tutorial di vari autori curato da Zach Leatherman (il creatore di Eleventy)
- [Learn Eleventy From Scratch (in inglese, a pagamento)](https://piccalil.li/course/learn-eleventy-from-scratch/){target="\_blank" rel="noopener noreferrer"} uno dei migliori corsi online per costruire da zero un sito con Eleventy. Ringrazio [Andy Bell](https://twitter.com/piccalilli_) per avermi dato l'opportunita di accedervi gratuitamente.

_Credit:_ alcune informazioni sono state tradotte e adattate dal [sito ufficiale di Eleventy](https://www.11ty.dev/){target="\_blank" rel="noopener noreferrer"}
{class="text-sm mt-8 mb-0"}
