let valor = document.getElementById("valor");
let gerar = document.getElementById("gerar");
let resultado = document.getElementById("resultado");

function calcular(){
    let Valor = parseFloat(valor.value);
    let conta = Valor / 3;

    resultado.innerHTML = `Carlos vai pagar R$${conta.toFixed(0)},00 , André vai pagar R$${conta.toFixed(0)},00 , e Felipe vai pagar R$${conta.toFixed(2)}.`


}
gerar.onclick = function(){
    calcular();
}