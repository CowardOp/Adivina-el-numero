let numeroSecreto = generarNumeroSecreto();
intentos = 1;

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
    document.getElementById("reiniciar").removeAttribute("disabled");
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
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Adivina el número");
  asignarTextoElemento("p", "Selecciona un número de 1 a 10");
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
  console.log(numeroSecreto);
}
function volverAIniciar() {
  //limpiar input
  document.getElementById("valorUsuario").value = "";
  //reiniciar intentos
  //volver a poner parrafo
  //generar numero aleatorio
  condicionesIniciales();
  //desabilitar boton
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
