document.addEventListener("DOMContentLoaded", () => {
  let buttons = document.getElementsByClassName('formulaButton');
  for (const button of buttons) {
    button.addEventListener("click", () => {
      let cells = button.parentElement.getElementsByClassName("cells");
      for (const cell of cells) {
        if (cell.dataset.mode == "value") {
          // set left alignement for formulas
          if (cell.dataset.formula) {
            cell.classList.add("text-left");
            cell.innerHTML = cell.dataset.formula

          } else {
            cell.innerHTML = cell.dataset.value;
          }
          cell.dataset.mode = "formula";

        } else {
          cell.innerHTML = cell.dataset.value;
          // remove left alignement to div element
          // make effective the cell alignement
          cell.classList.remove("text-left");
          cell.dataset.mode = "value"
        }
      }
      button.innerHTML == "Formule" ? button.innerHTML = "Valori" : button.innerHTML = "Formule"
    }
    );
  }
});