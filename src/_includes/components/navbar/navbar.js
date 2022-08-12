const header = document.getElementById("header");
const hamburger = document.getElementById("hamburger-menu");
const logo = document.getElementById("logo");
const menu = document.getElementById("checkbox-menu");
const open = document.getElementById("open");
const close = document.getElementById("close");

// TODO: Gestire i tab quando l'utente si trova nel menu e lo chiude

open.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if (event.key == "Enter" || event.key == " " || event.key == "Spacebar") {
    event.preventDefault();
    menu.checked = true;
    header.ariaExpanded = "true";
    close.focus();
  }
  if (event.key == "Tab" && !event.shiftKey) {
    event.preventDefault();
    logo.focus();
  }
});

logo.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if (event.key == "Tab" && event.shiftKey && !menu.checked) {
    event.preventDefault();
    open.focus();
  }
});

hamburger.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if ((event.key == "Esc" || event.key == "Escape") && menu.checked) {
    event.preventDefault();
    menu.checked = false;
    open.focus();
  }
});

close.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }
  if (event.key == "Enter" || event.key == " " || event.key == "Spacebar") {
    event.preventDefault();
    menu.checked = false;
    header.ariaExpanded = "false";
    open.focus();
  }
  if (event.key == "Esc" || event.key == "Escape") {
    event.preventDefault();
    menu.checked = false;
    header.removeAttribute("aria-expanded");
    open.focus();
  }
});
