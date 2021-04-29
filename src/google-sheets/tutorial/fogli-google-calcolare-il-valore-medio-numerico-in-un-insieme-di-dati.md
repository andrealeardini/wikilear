---
date: 2021-04-13
title: "Fogli Google: calcolare il valore medio numerico in un insieme di dati"
description: Una guida dettagliata sulle funzioni di Fogli Google per calcolare la media dei dati
subtitle: Fogli Google dispone di numerose funzioni che permettono di ottenere il valore numerico della media di un insieme di dati. Vediamo quale utilizzare in base al set di dati da analizzare.
image: /images/undraw_mathematics_4otb.png
image_title:
image_description:
---

Tra le varie funzioni disponibili in un foglio di calcolo, quella per il calcolo della media è probabilmente una delle più utilizzate. Per la maggior parte degli utenti sono sufficienti le funzioni MEDIA e MEDIA.PIÙ.SE, ma in ambito statistico si possono utilizzare altre funzioni in base al tipo di media da ottenere.

<details open>
<summary> Elenco delle funzioni per calcolare la media dei dati</summary>

| Funzione         | Descrizione                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| AVERAGE.WEIGHTED | Trova la media ponderata di una serie di valori, dati i valori e i corrispondenti pesi.                                       |
| DB.MEDIA         | Restituisce la media di un insieme di valori selezionati da un intervallo o da una matrice di tipo                            | tabella di database utilizzando una query di tipo SQL. |
| MEDIA            | Restituisce il valore numerico della media in un insieme di dati, ignorando il testo.                                         |
| MEDIA.PIÙ.SE     | Restituisce la media di un intervallo che dipende da più criteri.                                                             |
| MEDIA.ARMONICA   | Calcola la media armonica di un insieme di dati.                                                                              |
| MEDIA.DEV        | Calcola la grandezza media delle deviazioni dei dati dalla media di un insieme di dati.                                       |
| MEDIA.GEOMETRICA | Calcola la media geometrica di un insieme di dati.                                                                            |
| MEDIA.TRONCATA   | Calcola la media di un insieme di dati escludendo una porzione di dati dai margini superiori e inferiori dell'insieme stesso. |
| MEDIA.VALORI     | Restituisce il valore medio numerico in un insieme di dati.                                                                   |

{.text-sm .sm:text-base}

</details>

## MEDIA (AVERAGE)

Restituisce il valore medio numerico in un insieme di dati, ignorando il testo.

### Esempio di utilizzo

MEDIA(A2:A100;B2:B100;4;26)

MEDIA(1;2;3;4;5;C6:C20)

### Sintassi

MEDIA(valore1; [valore2; ...])

valore1 - Il primo valore o intervallo da esaminare nel calcolo del valore medio

valore2; ... - [ FACOLTATIVO ] - I valori o intervalli aggiuntivi da considerare per il calcolo del valore medio.

{% import 'components/sheet.njk' as sheet with context %}
{{ sheet.render(media) | trimHTML | safe }}
