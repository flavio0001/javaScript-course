const lista = [, 5, 8, 33, 44, 50, 62, 80];

function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Índice: ${i} - Elemento: ${array[i]}`);
    }
}

// Chame a função passando o array como argumento
imprimirArray(lista);
