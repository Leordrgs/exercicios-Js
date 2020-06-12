/*2.  Escreva um programa que utilize o console.log para imprimir todos os 
números de 1 a 100, com duas exceções. Para números divisíveis por 3, 
imprima "Fizz" ao invés do número e, para números divisíveis por 5 imprima "Buzz"
no lugar do número.
Quando isso funcionar, modifique seu programa para imprimir "FizzBuzz" para
 números que são divisíveis por 3 e 5 (ao mesmo tempo), além de continuar 
 imprimindo "Fizz" ou "Buzz" como antes.*/
 
 var i;

for (i=1; i<=100; i++){
    if (i % 3 == 0){
        console.log("Fizz");
    }
    if (i % 5 == 0){
        console.log("Buzz");
    }

    if (i % 3 != 0 && i % 5 != 0){
        console.log(i);
    }

    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }

}