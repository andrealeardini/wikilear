document.addEventListener("DOMContentLoaded", () => {
  // gestisco il pulsante del menu
  let body = document.getElementsByTagName("body")[0];
  let inert = document.getElementById("inert");
  let menuBtn = document.getElementById("menuBtn");
  let menu = document.getElementById("menu");
  let panel = document.getElementById("panel");
  let close = document.getElementById("close");
  let isOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!isOpen) {
      showMenu();
      inert.addEventListener(
        "click",
        () => {
          hideMenu();
        },
        { once: true }
      );
    } else {
      hideMenu();
    }
  });

  function showMenu() {
    panel.classList.remove("hidden");
    menu.classList.add("hidden");
    close.classList.remove("hidden");
    inert.classList.remove("hidden");
    isOpen = !isOpen;
  }

  function hideMenu() {
    panel.classList.add("hidden");
    menu.classList.remove("hidden");
    close.classList.add("hidden");
    inert.classList.add("hidden");
    isOpen = !isOpen;
  }
});

