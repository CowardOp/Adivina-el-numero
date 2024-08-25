import bootstrap from "bootstrap";

let numeroSecreto = 0;
intentos = 0;
let numeroSorteado = [];
// let numeroMaximo = parseInt(prompt("selecciona un numero maximo"));

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
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(numeroSorteado);
  //si ya sorteamos todos los numeros
  if (numeroSorteado.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
  } else {
    //si el numero generado ya esta en la lista
    if (numeroSorteado.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      numeroSorteado.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Adivina el número");
  asignarTextoElemento("p", `Selecciona un número de 1 a ${numeroMaximo}`);
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
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
