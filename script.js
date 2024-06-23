let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = document.getElementById("valorUsuario");
  return;
}

function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento("h1", "Adivina el número");
asignarTextoElemento("p", "Selecciona un número de 1 a 10");
