let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  document.getElementById("reiniciar").removeAttribute("disabled");
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
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function mensajesIniciales() {
  asignarTextoElemento("h1", "Adivina el número");
  asignarTextoElemento("p", "Selecciona un número de 1 a 10");
}
function volverAIniciar() {
  //limpiar input
  document.getElementById("valorUsuario").value = "";
  //reiniciar intentos
  intentos = 1;
  //volver aponer parrafo
  mensajesIniciales();
  //generar numero aleatorio

  //desabilitar boton
}
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

mensajesIniciales();
