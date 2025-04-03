//Crie uma função que receba um número e diga se ele é par ou ímpar.

function parOuImpar(numero){
    if (numero % 2 === 0){
        console.log("O número é par.");
    } else {
        console.log("O número é ímpar.");
    }
}


parOuImpar(326);
//O operador % (módulo) retorna o resto da divisão. Se for 0, é par.