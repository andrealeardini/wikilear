document.addEventListener("DOMContentLoaded", () => {
  // gestisco il pulsante search
  let searchBtn = document.getElementById("searchBtn");
  let search = document.getElementById("search");
  searchBtn.addEventListener("click", () => {
    window.open("https://www.google.com/search?q=site:wikilear.it "+search.value);
  });
});
