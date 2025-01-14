//Uma função expressa é atribuída a uma variável.
//A variável pode ser chamada como uma função.

const subtrair = function(a, b) {
    return a - b;
}
console.log(subtrair(4, 2));


/* 1. Crie uma função expressa chamada dividir que receba dois números e retorne o resultado da divisão.*/
const dividir = function(a, b, c, d) {
    return a / b / c / d;
}
console.log(dividir(10, 2, 2, 2));

/* 2. Escreva uma função chamada ePar que receba um número e retorne true se o número for par e false se for ímpar.*/
const par = function(a) {
    if (a % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(par(4));

/* 3. Crie uma função chamada mostrar que receba um valor e uma função como parâmetros. Esta função deve exibir o valor do parâmetro quando executada.*/
const mostrar = function(valor, funcao) {
    return funcao(valor);
}
console.log(mostrar(10, par));