//Problema: Dado um array de números, crie um novo array apenas com os números pares.

const numeros = [2, 4, 6, 3, 9, 11, 7, 13, 16, 17, 20, 21, 22, 23, 24, 25, 10];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);