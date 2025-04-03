//Multiplique dois arrays 1D e gere um array resultado com os produtos.

let a = [1, 2, 3];
let b = [4, 5, 6];
let resultado = [];

for (let i = 0; i <= a.length; i++){
    resultado.push(a[i] * b[i]);
}
console.log("Resultado:", resultado); // [4, 10, 18]