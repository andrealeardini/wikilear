let html = document.getElementsByTagName("html")[0];
let darkMode = document.getElementById("darkMode");
let lightMode = document.getElementById("lightMode");
let systemMode = document.getElementById("systemMode");

// manage dark mode
darkMode.addEventListener("change", setDarkMode, { passive: true });
lightMode.addEventListener("change", setLightMode, { passive: true });
systemMode.addEventListener("change", setSystemMode, { passive: true });

function setDarkMode() {
  localStorage.setItem("theme", "dark");
  html.classList.add("dark");
}

function setLightMode() {
  localStorage.setItem("theme", "light");
  html.classList.remove("dark");
}

function setSystemMode() {
  localStorage.setItem("theme", "system");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
