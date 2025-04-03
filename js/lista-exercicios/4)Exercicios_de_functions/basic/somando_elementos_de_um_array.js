//Crie uma função que receba um array de números e retorne a soma total dos elementos.

function somarArray(numeros){
    let soma = 0;

    for (let i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }

    return soma;
}

console.log(somarArray([5, 4, 7, 9, 10]));
//A função recebe um array de números e retorna a soma total dos elementos. Neste caso, a soma é 35. 5 + 4 + 7 + 9 + 10 = 35.