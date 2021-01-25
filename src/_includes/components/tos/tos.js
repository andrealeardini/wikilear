document.addEventListener("DOMContentLoaded", () => {

  let btnTOS = document.getElementById("confirmTOS");
  let dialogTOS = document.getElementById("TOS");
  let TOSaccepted = localStorage.getItem("TOS");

  if (!TOSaccepted) {
    dialogTOS.classList.remove("hidden");
    dialogTOS.classList.add("flex");
    btnTOS.addEventListener("click", setCookie);
  }

  function setCookie() {
    localStorage.setItem("TOS", new Date());
    dialogTOS.classList.remove("flex");
    dialogTOS.classList.add("hidden");
  }
});
