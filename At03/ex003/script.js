let pao = document.querySelector("#pao");
let broa = document.querySelector("#broa");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");


function calcular(){
    let qtdpao = Number(pao.value);
    let qtdbroa = Number(broa.value);
    let totalDoDia = (qtdpao * 0.12) + (qtdbroa * 1.50);
    let poupanca = totalDoDia * (10/100);

    resultado.innerHTML = ` Total da venda Diaria é R$ ${totalDoDia.toFixed(2)} <br>Valor para guardar na Poupança: R$ ${poupanca.toFixed(2)}`;

   
}
gerar.onclick = function(){
    calcular();
}