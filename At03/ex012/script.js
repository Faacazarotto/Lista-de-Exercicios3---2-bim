let valor = document.getElementById("valor");
let gerar = document.getElementById("gerar");
let resultado = document.getElementById("resultado");

function calcular(){
    let Valor = Number(valor.value);
    let centena = Math.floor(Valor / 100);
    let dezena = Math.floor(Valor % 100) / 10;
    let unidade = Math.floor(Valor % 10);
    resultado.innerHTML = `CENTENA = ${centena}, DEZENA = ${dezena}, UNIDADE = ${unidade}.`;
}
gerar.onclick = function(){
    calcular();
}