let tamanhoPizza = document.getElementById("tamanhoPizza");
let gerar = document.getElementById("gerar");
let resultado = document.getElementById("resultado");

function calculo(){
    let pizza = Number(tamanhoPizza.value);
    let diametro = (pizza / 2);
    let raio = 3.14 * (diametro**2);

    resultado.innerHTML = `Área da pizza é: ${raio.toFixed(0)}cm² .`
}
gerar.onclick = function(){
    calculo();
}