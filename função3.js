/*
3. Você pode obter o enésimo caractere, ou letra, de uma string, ao escrever
 "string"[N], o valor retornado será uma string contendo somente um caractere 
 (por exemplo "b"). O primeiro caractere tem a posição 0, o que faz com que o 
 último caractere esteja na posição string.length - 1. Em outras palavras, uma 
 string com dois caracteres tem comprimento 2 e seus caracteres estão nas posições
0 e 1.
Escreva uma função countBs que receba uma string como seu único argumento e retorne
um número que indica quantos "B" maiúsculos existem na string.
Então, escreva uma função chamada countChar, que funcione como countBs,
exceto que ela receba um segundo argumento que indique o caracter que deve ser 
contado (ao invés de contar somente "B"s). Reescreva countBs para utilizar essa 
nova função.
*/
function countChar (s, c){
    var i;
    var aux=0;
    var aux2=0;

    for (i=0; i<=s.length; i++){
        if (s[i] == c){
            aux++
        }
        else{
            aux2++;
        }
        
    }

    if (aux2 == i){
        alert ("Esse caracter não pertence a essa string: ");
    }
    if (aux>0){
        console.log("O caracter a ser contabilizado é o " + c + " e a sua quantidade na string é de: " + aux);
    }
}

function countBs (s){
    var i;
    var aux=0;

    for (i=0; i<=s.length; i++){
        if (s[i]=='B'){
            aux++;
        }

    }
    console.log("A quantidade de Bs é: " + aux);
}

var string;
var string2;

string = prompt("Digite sua string: ");

countBs(string);

console.log("Essa é sua string: " + string);

string2 = prompt("Indique nessa string outro caracter que queira contar");

countChar(string, string2);
