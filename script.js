let numeroSorteado = [];
let numeroSecreto = 0;
let intentos = 1;

let sortNumber = document.getElementById("sortNumber");
let sortButton = document.getElementById("sortButton");
let sortCont = document.getElementById("sortCont");
let numeroMaximo = 5; // Este se sobreescribirá con el valor del input

const sortNumberMax = () => {
  sortButton.addEventListener("click", () => {
    const validar = parseInt(sortNumber.value); // Obtener el valor del input
    if (validar === 0 || isNaN(validar)) {
      alert("Número inválido, intente nuevamente");
    } else {
      sortCont.classList.add("ocult");
      numeroMaximo = validar; // Establecer el número máximo desde el input
      numeroSecreto = generarNumeroSecreto(); // Generar el número secreto al iniciar
      intentos = 1; // Reiniciar los intentos
      asignarTextoElemento("p", `Elija un numero del 1 al ${numeroMaximo}`);
      console.log(`${numeroSecreto}`);
    }
  });
};

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `¡Acertaste el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario < numeroSecreto) {
      asignarTextoElemento("p", "Fallaste, el número es mayor");
    } else if (isNaN(numeroDeUsuario)) {
      asignarTextoElemento(
        "p",
        "Intento invalido ingrese un numero o un numero diferente a 0"
      );
      setTimeout(() => {
        asignarTextoElemento("p", `Elija un numero del 1 al ${numeroMaximo}`);
      }, 2000);
    } else {
      asignarTextoElemento("p", "Fallaste, el número es menor");
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.getElementById("valorUsuario").value = "";
}

function generarNumeroSecreto() {
  // Generar un número aleatorio entre 1 y el número máximo (definido por el input)
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  // Si todos los números posibles ya han sido sorteados
  if (numeroSorteado.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    // Verificar si el número generado ya ha sido sorteado antes
    if (numeroSorteado.includes(numeroGenerado)) {
      return generarNumeroSecreto(); // Volver a generar si ya fue sorteado
    } else {
      numeroSorteado.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

// Llamada inicial para activar el juego
sortNumberMax();

function condicionesIniciales() {
  asignarTextoElemento("h1", "Adivina el número");
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
}
function volverAIniciar() {
  //limpiar input
  document.getElementById("valorUsuario").value = "";
  sortCont.classList.remove("ocult");
  sortNumber.value = parseInt(0);
  asignarTextoElemento("p", "");
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
