//Problema: Dado um array com números repetidos, retorne um novo array sem duplicatas.

const numeros = [1, 2, 2, 3, 3, 4];
const unicos = [...new Set(numeros)];
console.log(unicos);