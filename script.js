let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  //acierta
  if (numeroDeUsuario == numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
  } else {
    //falla
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento("p", "Fallaste , número mayor");
    } else {
      asignarTextoElemento("p", "Fallaste , número menor");
    }
    intentos++;
  }
}

function limpiarCaja() {
  document.getElementById("valorUsuario");
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Adivina el número");
asignarTextoElemento("p", "Selecciona un número de 1 a 10");
