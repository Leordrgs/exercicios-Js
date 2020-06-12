/*
2. Escreva duas funções, area(raio) e circunf(raio), que retornem, respectivamente
 a área e a circunferência de um círculo, recebendo um raio por parâmetro. 
 Aproveite a constante Math.PI que retorna o valor de PI.
*/
var raio;

function area(r){
    var a;
    a = Math.PI * Math.pow(r, 2);
    console.log(a);
}

function circunf(r){
    var b;
    b = 2*Math.PI*r ;
    console.log(b);    
}

raio = prompt("Digite o raio do circulo: ");

area (raio);
circunf(raio);