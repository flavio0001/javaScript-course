//Inverta os elementos de um array manualmente, sem usar métodos prontos como .reverse().

let original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let invertido = [];

for (let i = original.length - 1; i >= 0; i--){
    invertido.push(original[i]);
}

console.log('Invertido: ', invertido);