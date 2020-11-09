document.addEventListener("DOMContentLoaded", () => {
  // gestisco il pulsante del menu
  let body = document.getElementsByTagName("body")[0];
  let content = document.getElementById("content");
  let pulsante = document.getElementById("pulsante");
  let menu = document.getElementById("menu");
  let panel = document.getElementById("panel");
  let close = document.getElementById("close");
  let isOpen = false;
  pulsante.addEventListener("click", () => {
    if (!isOpen) {
      panel.classList.remove("hidden");
      menu.classList.add("hidden");
      close.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
      menu.classList.remove("hidden");
      close.classList.add("hidden");
    }
    isOpen = !isOpen;
  });
});
