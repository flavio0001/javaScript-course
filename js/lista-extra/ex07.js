const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalPares = 0;

numeros.forEach(numero => {
    if (numero % 2 === 0){
        totalPares++
    }
});

console.log("Total de números pares:", totalPares);