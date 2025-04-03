//Dado [2, 4, 6], crie um novo array com o dobro de cada número.

const numeros = [2, 4, 6];
const dobro = [];

numeros.forEach((n) => {
    dobro.push(n * 2);
});

console.log(dobro);