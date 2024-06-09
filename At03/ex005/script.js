let vlrpg = document.querySelector("#vlrpg");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");
let tipogas = document.querySelector("#tpGasolina");

function calculo(){
    let pgt = parseFloat(vlrpg.value);


    if(tipogas.value == "aditivada"){
        let vlrTotal =  5.77 * pgt;
        let ml = vlrTotal / 1000;
        resultado.innerHTML = "A Quantidade de Gasolina será: " + ml.toFixed(1) + " L";
    }else{
        let vlrTotal = 5.58 * pgt;
        let ml = vlrTotal / 1000;
        resultado.innerHTML = "A Quantidade de Gasolina será: " + ml.toFixed(1) + " L";
    }
}
gerar.onclick = function(){
    calculo();
}