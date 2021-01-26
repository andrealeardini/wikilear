---
date: 2014-06-14
tags:
  - Google Maps
topics:
  - Google Maps
title: "L’URL di Google Maps: latitudine, longitudine, zoom, altitudine, angolo di rotazione e inclinazione"
description: L'URL di Google Maps spiegato nei dettagli, parametro per parametro
subtitle: Dopo aver visto come utilizzare la <a href="/blog/visualizzazione-earth-di-google-maps/">visualizzazione Earth in Google Maps</a> e <a href="/blog/coordinate-di-latitudine-e-longitudine-nuovo-google-maps/">come impostare latitudine e longitudine</a> ora è venuto il momento di dare uno sguardo più approfondito all’URL di Google Maps per scoprirne insieme i segreti.
image: /images/google-maps-URL-visualizzazione-earth-inclinata.png
image_title:
image_description:
old_url: /2014/06/lurl-di-google-maps-latitudine.html
---

Tramite il mouse o il pannello di navigazione puoi ruotare facilmente una mappa, inclinarla e aumentare o ridurre lo zoom. Ma forse hai notato che non hai pieno controllo sul livello di zoom e il grado di rotazione o di inclinazione. O almeno così sembra.

Osserva attentamente l’URL di Google Maps mostrato nella barra degli indirizzi. Ora, usando il mouse, prova a modificare zoom o l’inclinazione (se sei nella visualizzazione Earth). Hai notato che alcuni valori cambiano? Agendo manualmente su questi parametri è possibile impostare i valori desiderati.

## Latitudine, longitudine e zoom (URL di Google Maps)

Prendiamo come punto di riferimento il Colosseo; apri Google Maps e cerca per [[Colosseo]](https://www.google.com/maps/@41.89021,12.492231,17z){rel="noopener noreferrer"}. L’URL di Google Maps dovrebbe corrispondere a questo: [https://www.google.com/maps/@41.89021,12.492231,17z](https://www.google.com/maps/@41.89021,12.492231,17z){rel="noopener noreferrer"}

Consideriamo nel dettaglio i due parametri dopo l’URL standard (https://www.google.com/maps/).

| Parametro  | Descrizione  |
|---|---|
| @41.89021,12.492231  | Latitudine e longitudine del punto centrale della mappa (in questo caso il Colosseo)  |
| 17z  | Livello dello zoom. I valori standard vanno da 0 a 21 ma agendo manualmente si riesce ad arrivare fino a 30  |

## Altitudine, angolo di rotazione e inclinazione (URL di Google Maps)

Ora passiamo alla visualizzazione Earth, fai clic sulla miniatura Earth in basso a sinistra. L’URL di Google Maps a questo punto dovrebbe essere simile a questo:

[https://www.google.it/maps/@41.8901872,12.492231,502m/data=!3m1!1e3](https://www.google.it/maps/@41.8901872,12.492231,502m/data=!3m1!1e3){rel="noopener noreferrer"}

Esaminiamo i parametri che si sono aggiunti ai precedenti.

| Parametro  | Descrizione  |
|---|---|
| data=!3m1!1e3  | Indica che è attiva la visualizzazione Earth. Inserirlo manualmente nell’URL equivale a premere la **miniatura Earth** in Google Maps  |
| 496m  | Altitudine espressa in metri. Nella visualizzazione Earth, si passa dal livello dello zoom che esprime un valore in 2D all’altitudine che esprime una misura in 3D.  |

Ora inclina la vista, l’URL di Google Maps diventa:
[https://www.google.com/maps/@41.8852843,12.492231,772a,35y,39.29t/data=!3m1!1e3](https://www.google.com/maps/@41.8852843,12.492231,772a,35y,39.29t/data=!3m1!1e3){.break-words rel="noopener noreferrer"}

| Parametro |	Descrizione |
|---|---|
| 39.29t |	Angolo di inclinazione (t=tilt). Se non viene specificato la mappa sarà visualizzata con vista perpendicolare. Si possono impostare due valori: 39.29 (inclinazione leggera) o 78.6 (inclinazione panoramica) |
| 180h |	Angolo di rotazione della mappa (h=heading). I valori standard sono  90, 180 e 270. Manualmente si può inserire un qualsiasi valore compreso tra 0 e 360 |

Non essendoci una documentazione ufficiale che elenca tutti i parametri, l’elenco che ti ho proposto si basa più che altro sull’osservazione e la sperimentazione delle singole impostazioni. Se conosci il significato di altri parametri puoi segnalarmelo usando Twitter o tramite email. Il tuo contributo sarà prezioso per rendere ancora più completo e utile questo elenco!

_Fonti:_
[Cameras](https://developers.google.com/kml/documentation/cameras){rel="noopener noreferrer"}, [Altitude Modes](https://developers.google.com/kml/documentation/altitudemode){rel="noopener noreferrer"}
