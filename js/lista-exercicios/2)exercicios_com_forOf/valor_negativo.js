//Dado um array de números, verifique se há algum número negativo.

const numeros = [5, 10, -3, 8];
let temNegativo = false;

for (const numero of numeros){
    if (numero < 0){
        temNegativo = true;
        break
    }
}

console.log("Tem número negativo?", temNegativo);