let kilogramas = document.querySelector("#kilogramas");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function calcular(){
    let kg = parseFloat(kilogramas.value);
    let total = 12 * kg;

    resultado.innerHTML = "R$ " + total.toFixed(1);

}

gerar.onclick = function(){
    calcular();
}