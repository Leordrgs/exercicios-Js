/*
1. Vimos que a biblioteca Math contém uma função Math.min que retorna o menor
 argumento passado por parâmetro. Podemos, agora, construir uma função parecida.
  Construa uma função min que receba dois argumentos e retorne o menor.
Exemplo de uso:
console.log(min(0, 10));
// 0
console.log(min(0, -10));
// -10 
*/
function min (numero1, numero2){
    numero1 = prompt("Digite numero 1: ");
    numero2 = prompt("Digite o numero 2: ");

    if (numero1 < numero2){
        console.log(numero1);
    }
    if (numero2 < numero1){
        console.log(numero2);
    }
}
min(numero1, numero2);