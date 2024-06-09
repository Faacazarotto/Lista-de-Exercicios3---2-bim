let dias = document.querySelector("#dias");
let resultado = document.querySelector("#resultado");
let gerar = document.querySelector("#gerar");

function convesorTempo(){
    let days = parseInt(dias.value);
    let years = Math.floor(days / 360);
    let months = Math.floor((days % 360) / 30);
    let diasRestantes = (days % 360) % 30;
    
    if(diasRestantes === 0 && months !== 0){
        months--;
        diasRestantes = 30;
    }

    resultado.innerHTML = years + " anos, " + months.toFixed(0) + " meses e " + diasRestantes + " dias.";
}
gerar.onclick = function(){
    convesorTempo();
}
