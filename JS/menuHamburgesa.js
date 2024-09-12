document.addEventListener("DOMContentLoaded", function () {
  // Busca un elemento con el ID "icon_menu_border"
  const menu = document.querySelector("#icon_menu_border"); // Cambiado a #icon_menu_border
  if (menu) {
    // Verifica si se encontró el elemento

    // Agrega tres elementos "div" con la clase "lines-menu" dentro del elemento encontrado
    for (let i = 0; i < 3; i++) {
      const div = document.createElement("div");
      div.classList.add("lines-menu");
      menu.appendChild(div);
    }
  }
});

// JavaScript para cambiar la clase al hacer clic en el icono de hamburguesa
const menu = document.querySelector("#icon_menu_border"); // Cambiado a #icon_menu_border
const menuOculto = document.querySelector(".MenuOculto");
let isActive = false; // Variable para mantener el estado activo/inactivo

menu.addEventListener("click", function () {
  // Alterna entre las clases "transition-close" y ninguna para cambiar la animación después del primer clic
  if (isActive) {
    menuOculto.classList.remove("bajar");
    menuOculto.classList.add("subir");
    menuOculto.classList.remove("Mostrar");
    this.classList.remove("transition-close");
  } else {
    menuOculto.classList.add("bajar");
    menuOculto.classList.remove("subir");
    menuOculto.classList.add("Mostrar");
    this.classList.add("transition-close");
  }
  isActive = !isActive; // Cambia el estado activo/inactivo
});
