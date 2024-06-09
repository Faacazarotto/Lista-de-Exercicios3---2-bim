let cavalos = document.querySelector("#cavalos");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function calculo(){
    let qtdcavalos = Number(cavalos.value);
    
    let ferraduras = qtdcavalos * 4;

    resultado.innerHTML = "O total de ferraduras é: " + ferraduras + "  ferraduras";
}

gerar.onclick = function(){
    calculo();
}
