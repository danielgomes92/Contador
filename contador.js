var numeroZero = document.getElementById("numero");
var numero = 0;

function incrementar() {
    numero = numero + 1;
    numeroZero.innerHTML = numero;
}

function decrementar() {
    numero = numero - 1;
    numeroZero.innerHTML = numero;
}

// document.querySelector("#subtrair").addEventListener('click', subtrair_numeros)
// document.querySelector("#adicionar").addEventListener('click', adicionar_numeros)

// function adicionar_numeros(){
    
// }