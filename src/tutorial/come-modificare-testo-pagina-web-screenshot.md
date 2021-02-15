---
date: 2014-02-18
tags:
  - Tips and Tricks
  - Javascript
  - Screenshot
title: Screenshot con il trucco
description: Come modificare il testo di una pagina web direttamente nel browser usando del semplice codice JavaScript
subtitle: Come modificare il testo di una pagina web con un semplice clic
image: /images/undraw_Bookmarks_re_mq1u.png
image_title:
image_description:
old_url: /2014/02/screenshot-con-il-trucco.html
---
Lo sapevi che utilizzando JavaScript puoi abilitare la modifica di qualsiasi pagina web sul tuo browser? Un trucco utile se devi acquisire uno screenshot di una pagina e vuoi modificarne il testo senza ricorrere a un editor di immagini.

Trascina nella barra dei preferiti questo link: <a href="javascript:document.body.contentEditable='true'; document.designMode='on'; void 0;">Modifica pagina.</a>
Quando vuoi modificare una pagina web fai clic su questo preferito e apporta le modifiche desiderate.

> Se vuoi creare manualmente il preferito questo è il codice da utilizzare al posto del link: `javascript:document.body.contentEditable='true'; document.designMode='on'; void 0;`{.break-words}

_Fonte:_ John Mueller (post su Google+)

