let pessoa = document.querySelector("#pessoa");
let idade = document.querySelector("#idade");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function Idade(){

    let dias = Number(idade.value);
    let qtdDias = dias * 365;

    resultado.innerHTML = pessoa.value + " possui " + qtdDias + " dia(s) de vida."

}

gerar.onclick = function(){
    Idade();
}
