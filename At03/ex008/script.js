let camisaG = document.querySelector("#qtdCamisaG");
let resultG = document.querySelector("#resultadoG");
let camisaM = document.querySelector("#qtdCamisaM");
let resultM = document.querySelector("#resultadoM");
let camisaP = document.querySelector("#qtdCamisaP");
let resultP = document.querySelector("#resultadoP");
let gerar = document.querySelector("#gerar");
let resultGeral = document.querySelector("#resultGeral");

function calculo(){
    let qtdCamG = Number(camisaG.value);
    let qtdCamM = Number(camisaM.value);
    let qtdCamP = Number(camisaP.value);
    let total = Number(resultGeral.value);
    
    let totG = qtdCamG * 15;
    let totM = qtdCamM * 12;
    let totP = qtdCamP * 10;
    let geral = totG + totM + totP;

    resultG.innerHTML = "R$ " + totG;
    resultM.innerHTML = "R$ " + totM;
    resultP.innerHTML = "R$ " + totP;

    resultGeral.innerHTML = "R$ " + geral;
}
gerar.onclick = function(){
    calculo();
}