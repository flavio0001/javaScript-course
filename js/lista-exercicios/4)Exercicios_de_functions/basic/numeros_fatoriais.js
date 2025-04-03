//Crie uma função que receba um número inteiro positivo e retorne o fatorial desse número.

function fatorial(n){
    let resultado = 1;

    for (let i = n; i > 1; i--){
        resultado *= i;
    }

    return resultado;
}

console.log(fatorial(10));
//O fatorial de 10 é 3628800. 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 3628800.