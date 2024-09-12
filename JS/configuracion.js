function modRoot(id) {
  var color = document.getElementById(id).value;
  document.documentElement.style.setProperty("--" + id, color);
}

function sendRoot() {
  // Obtener todos los input dentro de la sección con id "Configuración"
  var inputs = document.querySelectorAll('#Configuración input[type="color"]');
  var strReturn;
  // Recorrer los inputs y mostrar el nombre de la variable CSS junto con su color
  inputs.forEach(function (input) {
    // Obtener el nombre de la variable CSS
    var varName = input.id;

    // Obtener el valor del color
    var colorValue = input.value;

    // Mostrar el nombre de la variable CSS y su color
    strReturn = strReturn + " --" + varName + ": " + colorValue + "; ";
  });
  console.log(strReturn);
}

function Aparece(ocultar) {
  var conf = document.getElementById("Configuración");
  if (ocultar) {
    conf.classList.remove("ocultar");
  } else {
    conf.classList.add("ocultar");
  }
}
