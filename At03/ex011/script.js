let salario = document.querySelector("#salario");
let gerar = document.getElementById("gerar");
let resultado = document.getElementById("resultado");

function calculo(){
    let vlrSalario = parseFloat(salario.value);
    let reajuste = vlrSalario * (15/100);
    let desconto = reajuste * (8/100);

    resultado.innerHTML = "O valor final do Salário é: R$" + desconto;
}

gerar.onclick = function(){
    calculo();
}
