/*3. Escreva um programa que cria uma string que representa um grid 8x8, usando
 caracteres de "newline" (\n) para separar as linhas. A cada posição no grid há
  um espaço ou o caracter "#". Os caracteres devem formar um tabuleiro de xadrez. 
  Jogando essa string para o console.log, deve mostrar algo assim:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Quando seu programa funcionar e gerar esse padrão, defina uma variável size = 8 e 
altere o programa de forma que ele funcione para qualquer size (tamanho), 
imprimindo um grid de acordo com o tamanho que você passar.*/
var i, j;
var string= '';
var size;

size = prompt ("Digite o tamanho que deseja: ");

for (i=1; i<=size; i++){
    for (j=1; j<=size; j++){
        if ((i+j) % 2 == 0) string += ' ';
        else string += '#';
    }
    string += '\n';
}
console.log (string);