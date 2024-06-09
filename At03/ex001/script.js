let altura = document.querySelector("#altura");
let largura = document.querySelector("#largura");
let resultado = document.querySelector("#resultado");
let gerar = document.querySelector("#gerar");

function calcular(){

    let vlrLarg = parseFloat(largura.value);
    let vlrAlt = parseFloat(altura.value);

    let area = vlrAlt * vlrLarg;
    
    resultado.innerHTML = "A área é: " + area + "m²";
}

gerar.onclick = function(){
    calcular();
}