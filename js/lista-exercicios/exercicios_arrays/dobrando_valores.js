//Problema: Dado um array de números, crie um novo array com os valores dobrados.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dobrados = [];

for (let i = 0; i < numeros.length; i++){
    dobrados.push(numeros[i] * 2);
}

console.log(dobrados);