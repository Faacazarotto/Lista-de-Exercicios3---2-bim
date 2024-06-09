let pontoAx = document.querySelector("#pontoAX");
let pontoAy = document.querySelector("#pontoAY");
let pontoBx = document.querySelector("#pontoBX");
let pontoBy = document.querySelector("#pontoBY");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function pontosCartesianos(){
    let pax = Number(pontoAx.value);
    let pab = Number(pontoAy.value);
    let pbx = Number(pontoBx.value);
    let pby = Number(pontoBy.value);

    let calculo = Math.sqrt((pbx - pax)**2 + (pby - pbx)**2);

    resultado.innerHTML = "A distancia é: " + calculo.toFixed(0);
}

gerar.onclick = function(){
    pontosCartesianos();
}
