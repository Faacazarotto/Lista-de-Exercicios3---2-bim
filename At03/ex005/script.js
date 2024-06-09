let vlrpg = document.querySelector("#vlrpg");
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");
let tipogas = document.querySelector("#tpGasolina");

function calculo(){
    let pgt = parseFloat(vlrpg.value);


    if(tipogas.value == "aditivada"){
        let vlrTotal =  pgt / 5.77;
        resultado.innerHTML = "A Quantidade de Gasolina será: " + vlrTotal.toFixed(1) + " L";
    }else{
        let vlrTotal = pgt / 5.58;
        resultado.innerHTML = "A Quantidade de Gasolina será: " + vlrTotal.toFixed(1) + " L";
    }
}
gerar.onclick = function(){
    calculo();
}