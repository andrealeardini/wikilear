---
date: 2021-08-20
title: "Come calcolare la media aritmetica in Fogli Google"
description: Una guida dettagliata sulle funzioni di Fogli Google per calcolare la media aritmetica dei dati
subtitle: Fogli Google dispone di alcune funzioni che permettono di calcolare la media aritmetica di un insieme di dati. Vediamo quale utilizzare in base all'insieme di dati da analizzare.
image: /images/media-aritmetica.png
image_title:
image_description:
useSheetJS: true
---

{% import 'components/sheet/sheet.njk' as sheet with context %}

<nav>
<details class="bg-gray-100 dark:bg-gray-800 text-sm lg:text-base p-4" open>
  <summary>Contenuto</summary>

- [Definizione di media aritmetica](#definizione-di-media-aritmetica)
- [Elenco delle funzioni per calcolare la media aritmetica dei dati](#elenco-delle-funzioni-per-calcolare-la-media-aritmetica-dei-dati)
  - [MEDIA (AVERAGE)](#media-(average)>)
  - [MEDIA.SE (AVERAGEIF)](#media.se-(averageif))
  - [MEDIA.PIÙ.SE (AVERAGEIFS)](#media.più.se-(averageifs))
  - [MEDIA.VALORI (AVERAGEA)](#media.valori-(averagea))
- [Esempi di utilizzo](#esempi-di-utilizzo)

</details>
</nav>

## Definizione di media aritmetica

La <dfn>media aritmetica</dfn>, a volte indicata anche come media numerica ma più spesso chiamata semplicemente media, viene calcolata sommando tutti i valori nell'insieme di dati e dividendo il risultato per il numero totale di valori. Quindi con un insieme di dati composto da quattro valori (es. 5, 8, 12, 16) la media sarà data dalla loro somma (5+8+12+16) divisa per 4 (5+8+12+16 = 41:4 = 10,25).

Con Fogli Google la media aritmetica si ricava usando la funzione `MEDIA`. In questo caso la formula sarà `=MEDIA(5, 8, 12, 16)`. Naturalmente l'insieme di dati può essere ricavato da un intervallo di celle usato direttamente nella formula come `=MEDIA(B2; B3; B4; B5)` o più semplicemente `=MEDIA(B2:B5)`.

## Elenco delle funzioni per calcolare la media aritmetica dei dati

Fogli Google dispone di diverse funzioni per calcolare la media aritmetica. Consulta [gli esempi](#esempi) per capire quale usare in base all'insieme di dati che devi analizzare.

| Funzione                                     | Descrizione                                                                           |
| -------------------------------------------- | ------------------------------------------------------------------------------------- |
| [MEDIA](#media-(average))                  | Restituisce il valore numerico della media in un insieme di dati, ignorando il testo. |
| [MEDIA.SE](#media.se-(averageif))          | Restituisce la media numerica di un intervallo in base a un criterio.                 |
| [MEDIA.PIÙ.SE](#media.più.se-(averageifs)) | Restituisce la media numerica di un intervallo che dipende da più criteri.            |
| [MEDIA.VALORI](#media.valori-(averagea))   | Restituisce il valore medio numerico in un insieme di dati.                           |

{.text-sm .sm:text-base}

### MEDIA (AVERAGE)

Restituisce il valore numerico della media in un insieme di dati, ignorando il testo.

#### Sintassi

`MEDIA(valore1; [valore2; ...])`

- _valore1_ Il primo valore o intervallo da esaminare nel calcolo del valore medio.
- _valore2; ..._ [FACOLTATIVO] I valori o intervalli aggiuntivi da considerare per il calcolo del valore medio.

#### Esempio di utilizzo

Vedi [l'esempio 1.](#calcolare-la-media-dei-voti-degli-studenti)

> `MEDIA` ignora le celle che contengono del testo. Se vuoi contare come valori anche le celle che contengono del testo usa la funzione `MEDIA.VALORI`.

### MEDIA.SE (AVERAGEIF)

Restituisce la media numerica di un intervallo in base a un criterio.

#### Sintassi

`MEDIA.SE(intervallo_valori_da_filtrare; criterio; [intervallo_media])`

- _intervallo_valori_da_filtrare_ è l'intervallo che contiene i valori o criteri da filtrare.
- _"criterio"_ è il valore o criterio da usare come filtro.
- _intervallo_media_ [FACOLTATIVO] è l'intervallo di celle che contiene i valori di cui calcolare la media. Va specificato solo nel caso in cui non corrisponda a _intervallo_valori_da_filtrare_.

#### Esempio di utilizzo

Vedi [l'esempio 3.](#calcolare-la-media-del-fatturato-per-rappresentante-area-e-categoria)

### MEDIA.PIÙ.SE (AVERAGEIFS)

restituisce la media numerica di un intervallo che dipende da più criteri

#### Sintassi

`MEDIA.PIÙ.SE(intervallo_media; intervallo_valori_da_filtrare; criterio; [intervallo_aggiuntivo_valori; criterio_aggiuntivo; ...])`

- _intervallo_media_ è l'intervallo di valori di cui vogliamo calcolare la media. Questo intervallo sarà lo stesso per tutti i criteri aggiuntivi e quindi è il primo da specificare.
- _intervallo_valori_da_filtrare_ indica l'intervallo di dati che contiene i valori o criteri da filtrare.
- _criterio_ è il criterio o valore per cui vogliamo filtrare i dati.
- _intervallo_aggiuntivo_valori_; _criterio_aggiuntivo_ [FACOLTATIVO] possono essere ripetuti (sempre a coppia) per aggiungere ulteriori intervalli di criteri.

#### Esempio di utilizzo

Vedi [l'esempio 4.](#calcolare-la-media-del-fatturato-per-rappresentante-aerea-e-categoria)

> Fai attenzione che l'ordine dei parametri cambia rispetto alla funzione `MEDIA.SE`.

### MEDIA.VALORI (AVERAGEA)

Restituisce il valore medio numerico in un insieme di dati.

#### Sintassi

`MEDIA.VALORI(valore1, [valore2, ...])`

- _valore1_ il primo valore o l'intervallo di dati da esaminare per calcolare la media aritmetica.
- _valore2, ..._ [FACOLTATIVO] i valori o intervalli di dati aggiuntivi da esaminare.

#### Esempio di utilizzo

Vedi [l'esempio 2.](#calcolare-la-media-dei-valori-in-un-set-di-dati-con-testo)

> `MEDIA.VALORI` considera le celle che contengono del testo come celle con valore 0, se vuoi ignorare le celle con testo usa la funzione `MEDIA`.

<nav>
<details id="esempi" class="heading bg-gray-100 dark:bg-gray-800 text-sm lg:text-base p-4" open>
<summary class="font-semibold text-lg heading" id="esempi-di-utilizzo">
Esempi di utilizzo
</summary>

- [Esempio 1: calcolare la media dei voti degli studenti](#calcolare-la-media-dei-voti-degli-studenti)
- [Esempio 2: calcolare la media dei valori in un insieme di dati con testo](#calcolare-la-media-dei-valori-in-un-insieme-di-dati-con-testo)
- [Esempio 3: calcolare la media del fatturato per rappresentante](#calcolare-la-media-del-fatturato-per-rappresentante-area-e-categoria)
- [Esempio 4: calcolare la media del fatturato per rappresentante, area e categoria](#calcolare-la-media-del-fatturato-per-rappresentante-aerea-e-categoria)

</details>
</nav>

## Esempio 1: calcolare la media dei voti degli studenti{id="calcolare-la-media-dei-voti-degli-studenti"}

Supponi di voler registrare i risultati ottenuti dai tuoi studenti durante l'anno scolastico. La tua classe è composta da tre studenti (Andrea, Filippo e Mario) e l'anno scolastico è suddiviso in tre trimestri. Ecco un esempio di come potrebbe essere il tuo registro.

{{ sheet.render(registro) | trimHTML | safe }}

Vuoi calcolare la media aritmetica dei voti dei tuoi studenti per ogni trimestre (da aggiungere alla colonna E) e quella del singolo studente per i tre trimestri (da aggiungere rispettivamente nelle colonne B, C e D). In questo caso la funzione da usare è `MEDIA`. Questa funzione accetta uno o più parametri.

- _valore1_
- _valore2_ [FACOLTATIVO]

Entrambi i parametri possono essere un valore, una cella o un intervallo di celle. Ad esempio queste due formule restituiscono lo stesso risultato.

```xls
=MEDIA(B2; C2; D2)
=MEDIA(B2:D2)
```

La media dei voti di Andrea per i tre trimestri sarà data dalla formula `=MEDIA(B2:D2)`. Mentre la media dei voti di tutti gli studenti per il primo trimestre si ricava con la formula `=MEDIA(B2:B4)`.

La media aritmetica di tutti gli studenti per i tre trimestri si può ricavare utilizzando le medie parziali oppure l'intero insieme di dati. Tutte queste formule danno lo stesso risultato (67,2).

```xls
=MEDIA(E2:E4)
=MEDIA(B2:D4)
=MEDIA(B5:D5)
```

Ora che hai capito come funziona MEDIA prova a scrivere le formule che mancano e confrontale poi con quelle indicate nella tabella qui sotto (ricordati che puoi premere il pulsante **Formule** per mostrare le formule che corrispondono al testo visualizzato).

{{ sheet.render(media) | trimHTML | safe }}

## Esempio 2: calcolare la media dei valori in un insieme di dati con testo{id="calcolare-la-media-dei-valori-in-un-set-di-dati-con-testo"}

In questo esempio i dati e la situazione corrispondono a quelli dell'esempio 1. Nei voti avrai notato un valore molto basso, un bel 0 preso da Mario nel 2° trimestre. Decidi di sostituire lo 0 con un trattino (-). In fondo è solo una questione di stile. Non proprio, nota la differenza nella tabella qui sotto.

{{ sheet.render(trattino) | trimHTML | safe }}

Se confronti le celle evidenziate con la tabella dell'esempio 1, puoi vedere che ora le medie non corrispondono più. Sostituire lo 0 con il trattino non è stata una bella idea. Questo è un aspetto importante da tenere presente. **Quando si usa la funzione `MEDIA` tutti i valori dell'insieme di dati devono essere numerici, altrimenti vengono ignorati.** Ci sono situazioni in cui fa comodo ignorare il testo, ma nell'esempio del nostro registro in realtà il trattino equivale a uno 0 e quindi va conteggiato come valore. Se vuoi mettere il trattino (o N/A o qualsiasi altra sigla) al posto dello 0 devi usare la funzione `MEDIA.VALORI` che conta anche le celle con testo assegnando 0 come valore della cella. La sintassi è uguale a quella di `MEDIA`.

Riscrivi le formule della tabella precedente usando `MEDIA.VALORI` e confrontale con quelle della tabella qui sotto. Ora i conti tornano.

{{ sheet.render(media_valori) | trimHTML | safe }}

## Esempio 3: calcolare la media del fatturato per rappresentante{id="calcolare-la-media-del-fatturato-per-rappresentante-area-e-categoria"}

Lavori come segretario/a in una ditta che opera a livello nazionale. La ditta ha alcuni rappresentanti (Andrea, Antonio, Filippo, Luca e Marco) sparsi per il territorio (Nord, Centro e Sud) che si occupano di tre settori o categorie merceologiche (Attrezzature, Cancelleria e Libri).

In questa tabella hai registrato il fatturato per Rappresentante, Area e Settore.

{{ sheet.render(media_se, on, 0, 12) | trimHTML | safe }}

Il responsabile delle vendite ti chiede di calcolare:

- la media del fatturato per ogni settore.
- la media del fatturato per ogni area.

Ci vorrebbe una funzione che permetta di filtrare i dati di cui vogliamo calcolare la media, questo è proprio quello che fa la funzione `MEDIA.SE`. Questa funzione accetta tre parametri:

- _intervallo_valori_da_filtrare_;
- _criterio_;
- _intervallo_media_ [FACOLTATIVO].

Vediamo cosa scrivere per calcolare la media del fatturato per ogni settore.

- _intervallo_valori_da_filtrare_ -> nella nostra tabella di esempio, le righe da 2 a 12 corrispondono al fatturato realizzato da un rappresentante per ciascun settore merceologico in ciascuna area (ogni riga è una registrazione). Ci interessa la media per ogni settore quindi i dati da filtrare si trovano nella **colonna C** (Settore).
- _criterio_ -> il criterio è il nome del settore di cui vogliamo calcolare la media (attrezzature, cancelleria, libri).
- _intervallo_media_ -> il terzo parametro è facoltativo e quando corrisponde a _intervallo_valori<wbr>\_da_filtrare</wbr>_ può essere ommesso. Nel nostro caso i valori di cui calcolare la media (il fatturato) si trovano in un'altra colonna **(colonna D)** rispetto ai valori da filtrare **(colonna C)** quindi dobbiamo specificare anche _intervallo_media_.

La formula per calcolare la media del fatturato realizzato per un settore sarà `=MEDIA.SE(C2:C12; [criterio]; D2:D12)` dove al posto di [criterio] dobbiamo indicare il nome del settore.

```xls
=MEDIA.SE(C2:C12; "attrezzature"; D2:D12)
=MEDIA.SE(C2:C12; "cancelleria"; D2:D12)
=MEDIA.SE(C2:C12; "libri"; D2:D12)
```

> Se il criterio da verificare è un testo, la ricerca ignora le maiuscole o le minuscole. Per esempio, se il criterio è "libri" verrano incluse tutte le varianti: "Libri", "LIBRI", ecc.

Diamo un aspetto un po' più professionale a questa formula e utilizziamo una cella come riferimento per il nome del settore e blocchiamo gli intervalli per renderli assoluti. In questo modo possiamo scrivere la formula una sola volta e poi copiarla e incollarla (o trascinarla) nelle altre celle. Se questi concetti non ti sono chiari, non ti preoccupare, per il momento li puoi ignorare. In un prossimo articolo te li spiegherò nel dettaglio.

```xls
=MEDIA.SE($C$2:$C$12; A15; $D$2:$D$12)
=MEDIA.SE($C$2:$C$12; A16; $D$2:$D$12)
=MEDIA.SE($C$2:$C$12; A17; $D$2:$D$12)
```

{{ sheet.render(media_se, on, 14, 17) | trimHTML | safe }}

Ora che hai capito come funziona MEDIA.SE prova a scrivere le formule per calcolare la media del fatturato realizzato in ciascuna area geografica e confrontale poi con quelle indicate nella tabella qui sotto (ricordati che puoi premere il pulsante **Formule** per mostrare le formule che corrispondono al testo visualizzato).

{{ sheet.render(media_se, on, 19, 22) | trimHTML | safe }}

## Esempio 4: calcolare la media del fatturato per rappresentante, aerea e categoria{id="calcolare-la-media-del-fatturato-per-rappresentante-aerea-e-categoria"}

Nell'esempio 3 abbiamo visto come ricavare le medie del fatturato per settore e quelle per area geografica. Ora il responsabile delle vendite vuole analizzare nel dettaglio i dati e ti chiede di preparargli un prospetto con la media di ogni settore in base all'area geografica. Le cose si complicano, i criteri sono 2, ma la funzione `MEDIA.SE` accetta solo un criterio. In questo caso devi usare la funzione `MEDIA.PIÙ.SE` che accetta uno o più criteri. Vediamo nel dettagli i parametri da specificare:

- _intervallo_media;_
- _intervallo_valori_da_filtrare;_
- _criterio;_
- _intervallo_aggiuntivo_valori; criterio_aggiuntivo;_ [FACOLTATIVO]

I parametri obbligatori sono gli stessi previsti per la funzione `MEDIA.SE` ma cambia l'ordine. Il primo parametro da specificare è **intervallo_media**, in questo caso è obbligatorio e rimane sempre lo stesso per ogni criterio impostato. Gli altri due parametri ci permettono di definire i valori da filtrare e il relativo criterio. Se specifico una sola coppia di valori e criteri ottengo lo stesso risultato di `MEDIA.SE`. Ma ecco che entrano in gioco i parametri facoltativi, posso utilizzarli (sempre in coppia) per specificare altri criteri da soddisfare per filtrare i dati.

Per questo esempio utilizziamo questi dati.

{{ sheet.render(media_piu_se, on, 0, 14) | trimHTML | safe }}

Vediamo insieme come calcolare la media del fatturato per il **settore Attrezzature** per la sola area geografica del **nord.** I parametri da usare sono:

- _intervallo_media_ -> indichiamo l'intervallo di celle in cui abbiamo registrato il fatturato (D2:D14).
- _intervallo_valori_da_filtrare_ -> l'intervallo di celle in cui è specificato il settore della registrazione (C2:C14).
- _criterio_ -> "attrezzature"
- _intervallo_aggiuntivo_valori_ -> l'intervallo di celle in cui è indicata l'area geografica della registrazione (B2:B14)
- _criterio_aggiuntivo_ -> "nord"

Per calcolare la media di ciascun settore per il nord puoi usare queste formule.

```xls
=MEDIA.PIÙ.SE(D2:D14; C2:C14; "attrezzature"; B2:B14; "nord")
=MEDIA.PIÙ.SE(D2:D14; C2:C14; "cancelleria"; B2:B14; "nord")
=MEDIA.PIÙ.SE(D2:D14; C2:C14; "libri"; B2:B14; "nord")
```

Anche in questo caso la formula può essere migliorata utilizzando i riferimenti assoluti. Vuoi metterti alla prova? Bene, allora prepara una tabella in cui le colonne rappresentano le aree geogragiche e le righe i settori.

{{ sheet.render(settori_x_area, on, 16, 19) | trimHTML | safe }}

Ora crea la formula per la cella B17. Sostituisci area e settore con il riferimento alle rispettive celle di intestazione (A17, B16). Blocca i riferimenti delle celle e degli intervalli (attenzione che sono misti assoluti e relativi) e con un solo copia e incolla (o trascinando) crea le altre formule.

Se hai scritto bene la formula nella cella B17, dopo aver copiato e incollato la formula nelle altre celle, dovresti ottenere le medie riportate qui sotto. In caso contrario controlla bene i riferimenti. Se non riesci a trovare l'errore puoi sempre dare una sbirciatina alle formule della tabella.

// sheet.render(media_piu_se, on, 16, 19) | trimHTML | safe //

## Riferimenti

[MEDIA (AVERAGE) - Guida di Editor di Documenti](https://support.google.com/docs/answer/3093615)

[MEDIA.SE (AVERAGEIF) - Guida di Editor di Documenti](https://support.google.com/docs/answer/3256529)

[MEDIA.PIÙ.SE (AVERAGEIFS) - Guida di Editor di Documenti](https://support.google.com/docs/answer/3256534)

[MEDIA.VALORI (AVERAGEA) - Guida di Editor di Documenti](https://support.google.com/docs/answer/3093617)
