// this code should be execute as a inline script in the head section
window.addEventListener("DOMContentLoaded", (event) => {
  let html = document.getElementsByTagName("html")[0];
  let darkMode = document.getElementById("darkMode");
  let lightMode = document.getElementById("lightMode");
  let systemMode = document.getElementById("systemMode");
  const theme = localStorage.getItem("theme");

  // detect dark mode settings (dark, light, system preference)
  switch (theme) {
    case "dark":
      darkMode.checked = true;
      html.classList.add("dark");
      break;
    case "light":
      lightMode.checked = true;
      html.classList.remove("dark");
      break;
    case "system":
    default:
      systemMode.checked = true;
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        html.classList.add("dark");
      }
      break;
  }
});
