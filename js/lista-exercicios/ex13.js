/** Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'. */

const lista = [6, 7, 1, 60, 50, 44, 45, 30, 70, 190, 700];

function maiorMenor(x, y){
    x = Math.min(...lista);
    y = Math.max(...lista);
    return `O menor número é ${x} e o maior número é ${y}`;
}

console.log(maiorMenor());
maiorMenor(lista);