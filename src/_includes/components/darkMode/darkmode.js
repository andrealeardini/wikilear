document.addEventListener("DOMContentLoaded", () => {
  // manage dark mode
  let html = document.getElementsByTagName("html")[0];
  let body = document.getElementsByTagName("body")[0];
  let darkMode = document.getElementById("darkMode");
  let lightMode = document.getElementById("lightMode");
  let systemMode = document.getElementById("systemMode");
  let darkModeState = document.getElementById("darkModeState");
  let state = localStorage.getItem("theme");

  if (state === "dark") {
    setDarkMode();
  } else if (state === "light") {
    setLightMode();
  } else {
    setSystemMode();
  }

  darkMode.addEventListener("click", setDarkMode);
  lightMode.addEventListener("click", setLightMode);
  systemMode.addEventListener("click", setSystemMode);

  function setDarkMode() {
    darkMode.classList.add("border", "rounded-lg");
    lightMode.classList.remove("border", "rounded-lg");
    systemMode.classList.remove("border", "rounded-lg");
    localStorage.setItem("theme", "dark");
    html.classList.add("dark");
    darkModeState.innerText="Modalità scura on";
    state = "dark";
  }

  function setLightMode() {
    darkMode.classList.remove("border", "rounded-lg");
    lightMode.classList.add("border", "rounded-lg");
    systemMode.classList.remove("border", "rounded-lg");
    localStorage.setItem("theme", "light");
    html.classList.remove("dark");
    darkModeState.innerText = "Modalità scura off";
    state = "light";
  }

  function setSystemMode() {
    darkMode.classList.remove("border", "rounded-lg");
    lightMode.classList.remove("border", "rounded-lg");
    systemMode.classList.add("border", "rounded-lg");
    localStorage.setItem("theme", "system");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      html.classList.add("dark");
    };
    darkModeState.innerText = "Modalità scura auto";
    state = "system";
  }
});
