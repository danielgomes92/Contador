var numeroZero = document.getElementById("numero");
var numero = 0;

function increment() {
    numero = numero + 1;
    numeroZero.innerHTML = numero;
}

function decrement() {
    numero = numero - 1;
    numeroZero.innerHTML = numero;
}