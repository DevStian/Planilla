const buttonModoOscuro = document.getElementById("modo-oscuro");
const htmlElement = document.querySelector("html");

buttonModoOscuro.addEventListener("click", () => {
  console.log("hola");
  htmlElement.dataset.theme =
    htmlElement.dataset.theme === "dark" ? "light" : "dark";
});

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });
