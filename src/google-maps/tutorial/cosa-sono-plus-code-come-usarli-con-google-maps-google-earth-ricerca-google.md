---
date: 2021-12-09
title: Cosa sono i Plus Codes e come usarli con Google Maps, Google Earth e Ricerca Google
tags:
  - Google Earth
  - Ricerca Google
  - Plus Codes
description: I Plus Codes in pochi anni sono diventati un valido strumento per localizzare una posizione specifica su una mappa
subtitle: Latitudine e longitudine di un luogo non sono le uniche coordinate che permettono di localizzare un punto geografico. Al loro posto puoi usare i Plus Codes. Vediamo cosa sono e come utilizzarli in Google Maps.
image: /images/pluscodes_lockup.png
image_title:
image_description: Logo Plus Codes
---

<nav class="mt-8">
<details class="bg-gray-100 dark:bg-gray-800 text-sm lg:text-base p-4" open>
  <summary>Contenuto</summary>

- [Cosa sono i Plus Codes](#cosa-sono-i-plus-codes)
- [Come trovare e condividere il Plus Code di un luogo](#come-trovare-e-condividere-il-plus-code-di-un-luogo)
- [Come trovare un luogo usando il Plus Code in Google Maps, Google Earth e Ricerca Google](#come-trovare-un-luogo-usando-un-plus-code-in-google-maps%2C-google-earth-e-ricerca-google)

</details>
</nav>

## Cosa sono i Plus Codes

I <dfn>Plus Codes</dfn> sono dei codici che identificano in modo preciso un punto del pianeta. Sono basati sulle coordinate geografiche di latitudine e longitudine ma risultano più facili da leggere e condividere. Ad esempio, il Plus Code `8QQ7+V8R Dublino` rappresenta l'ingresso principale dell'ufficio di Google a Dublino.

![Latitudine e longitudine di un punto sul globo trasformati in un Plus Code](/images/plus-codes-latitudine-longitudine-globo.svg "Un Plus Code è calcolato partendo da latitudine e longitudine di un punto sul globo"){.w-4/5}**Conversione delle coordinate in Plus Code.<br>Image credit: Google**

Spesso chi abita in un'area remota o anche in nuovo quartiere di una città si trova in difficoltà quando deve fornire il suo indirizzo a corrieri, operatori sanitari, forze dell'ordine, ecc. La zona potrebbe non essere stata mappata su Google Maps oppure non esiste proprio l'indirizzo perchè non è stato ancora assegnato dal comune. In questi casi condividere un Plus Codes diventa la cosa più semplice e immediata.

In assenza di nomi di vie e indirizzi precisi, come vengono creati i Plus Codes?

![Il pianeta rappresentato come una griglia formata dall'intersezione di meridiani e paralleli](/images/plus-codes-grid.svg){.w-4/5}**Visualizzazione della griglia.<br>Image credit: Google**

Il sistema ideato da Google si basa sull'uso di griglie. Una prima suddivisone divide il pianeta lungo le linee di latitudine e longitudine per formare una griglia di partenza.

![Caratteri assegnati agli assi X e Y della griglia](/images/plus-codes-grid-axis-x-y.svg){.w-4/5}**Griglia di livello superiore di un Plus Code.<br>Image credit: Google**

La griglia è etichettata lungo gli assi X e Y utilizzando un insieme specifico di 20 caratteri alfanumerici <wbr>{2,3,4,5,</wbr>6,7,8,9,<wbr>C,F,G,H,J,M,P,<wbr>Q,R,V,</wbr>W,X}. Una scelta ben studiata da parte di Google che impedisce di fare confusione con i caratteri. Spesso infatti caratteri come "1", "L" e "l" vengono scambiati tra di loro causando non pochi grattacapi a chi li usa. Basti pensare a quante volte ci siamo trovati in difficoltà nell'inserire una password e il problema era che avevamo scambiato un "1" (uno) per una "`l`" (elle) o una "i" maiuscola per una "l" (elle) minuscola. Tra i caratteri scelti per il Code Plus mancano anche le vocali in modo che non siano formate accidentalmente parole di senso compiuto in una qualche lingua. Grazie a questi accorgimenti i Plus Codes possono essere utilizzati da chiunque, indipendentemente dalla lingua parlata.

![Cella della griglia all'ultimo livello](/images/plus-codes-zooming-into-an-individual-cell.svg){.w-4/5}**Zoom in una singola cella.<br>Image credit: Google**

Questa griglia di partenza forma quello che viene chiamato globo digitale. Ogni cella della griglia sul globo digitale viene quindi ulteriormente suddivisa, gli assi X e Y vengono nuovamente etichettati con i 20 caratteri sopra e il processo viene ripetuto per creare un Plus Code completo. Nel caso dell'ufficio di Google a Dublino ciò si tradurrebbe in un Plus Code completo di `9C5M8QQ7+V8R`.

I Plus Codes funzionano un po' come i numeri telefonici. Prendiamo ad esempio il numero italiano `+39(06)12345678`. Abbiamo un prefisso internazionale (`+39`), uno locale (`06` che corrisponde a Roma) e poi il numero dell'utente (`12345678`). Se mi trovo in Italia non c'è bisogno di comporre il prefisso internazionale (`+39`), mentre se sono all'estero devo specificarlo. Una volta si poteva omettere anche il prefisso locale, così che se mi trovavo a Roma avrei potuto digitare solamente `12345678`. Per i Plus Codes si segue un principio simile. I primi quattro caratteri del codice possono essere omessi se ti trovi già in zona.

Per esempio, se mi trovo a Dublino, il Plus Code per l'ufficio di Google di Dublino può essere abbreviato in `8QQ7+V8R`. Se mi trovo invece in Irlanda, ma non a Dublino, devo specificare anche la città o in alternativa il terzo e il quarto carattere del codice (`5M`). Se cerco l'indirizzo e non sono in Irlanda devo specificare i primi quattro caratteri del codice (`9C5M`) o in alternativa la città (Dublino). I codici `9C5M8QQ7+V8R` e `8QQ7+V8R Dublino` rappresentano quindi lo stesso luogo e permettono di raggiungere la sede di Google a Dublino a partire da qualsiasi luogo del pianeta.

> Nell'esempio qui sopra `9C` e `5M` rappresentano le suddivioni della griglia, non corrispondono fisicamente all'Irlanda o a Dublino ma identificano l'area della cella che li comprende.

![Mappa con indicata la posizione corrispondente al Plus Code 8QQ7+V8R Dublino](/images/plus-codes-mappa-google.png)**Mappa per 8QQ7+V8R Dublino**

Tornando all'esempio della griglia, gli ultimi quattro caratteri del codice a sinistra del segno '+' (nel nostro caso `8QQ7`) rappresentano la cella di destinazione del reticolato di griglie. L'area sarebbe ancora troppo grande per definire con precisione un indirizzo. Ecco che entra in gioco il fattore di zoom che è specificato dai caratteri a destra del segno '+'. Ad esempio, un Plus Code con due caratteri dopo il segno '+' rappresenta un'area di circa 13m x 13m, circa le dimensioni di mezzo campo da basket. L'aggiunta di un carattere aggiuntivo riduce questa dimensione a circa 3m x 3m, restituendo un punto della mappa con una buona precisione.

> I Plus Codes prendono il nome dal segno '+' che è una delle loro caratteristiche chiave. Un codice completo deve avere almeno due caratteri dopo il segno '+'.

## Come trovare e condividere il Plus Code di un luogo

Per trovare il Plus Code di un qualsiasi punto sulla mappa:

1. Fai clic sul luogo desiderato o su un'area della mappa
2. Viene visualizzato un riquadro informativo simile a questo
   ![Riquadro informativo con le coordinate del luogo](/images/plus-code-riquadro-informativo.png "Riquadro informativo con le coordinate del luogo"){.mt-4}

3. Fai clic sulle coordinate del luogo nel riquadro informativo
4. Verrà visualizzato un pannello sulla sinistra con varie informazioni tra cui il Plus Code&nbsp;<img src="/images/ic_plus_code.png" width="16" height="16" class="w-4 inline-block">
   ![Pannello informativo con il Plus Code del luogo](/images/plus-code-pannello-google-maps.png){.mt-4}

5. Se vuoi copiare o condividere il codice fai clic sul Plus Code&nbsp;<img src="/images/ic_plus_code.png" width="16" height="16" class="w-4 inline-block">
6. Incolla il testo copiato in un messaggio email o invialo in un'app di messaggistica (WhatsApp, Chat, Messenger, Telegram, ecc.)

## Come trovare un luogo usando un Plus Code in Google Maps, Google Earth e Ricerca Google

1. Per cercare un luogo con un Plus Code inserisci il codice nella casella di ricerca
   - Se ti trovi in una citta diversa da quella che stai cercando inserisci il Plus Code completo (ad esempio: 8QQ7+V8R, Dublino).
   - Se ti trovi nella stessa città puoi inserire solo il codice di sei o sette cifre (ad esempio: 8QQ7+V8R).
2. Premi INVIO per avviare la ricerca (o fai clic sulla lente di ingrandimento se presente)

**Per approfondire:**

- [Plus Codes (sito ufficiale in inglese)](http://maps.google.com/pluscodes/)
- [How we’re giving everyone, everywhere an address (Blog di Google)](https://www.blog.google/products/maps/google-maps-101-giving-everyone-everywhere-an-address/)
- [Trovare e condividere un luogo utilizzando i plus code (Guida di Google Maps)](https://support.google.com/maps/answer/7047426?hl=it&co=GENIE.Platform%3DDesktop&oco=0)
