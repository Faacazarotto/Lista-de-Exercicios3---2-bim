let datainicial = document.querySelector("#datainicial");
let datafinal = document.querySelector("#datafinal")
let gerar = document.querySelector("#gerar");
let resultado = document.querySelector("#resultado");

function dateDifference(datainicial, datafinal){
    let difDias = 24;
    let difMes = difDias/30;
    let difAno = difMes/12;

    resultado.innerHTML = "Já se passaram " + difAno + " dias";
}

let date1 = new Date('2024-01-01');
let date2 = new Date('2024-12-31');
let diferença = dateDifference(date1, date2);



gerar.onclick = function(){
    dateDifference();
}