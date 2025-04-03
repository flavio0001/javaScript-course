//Dado um array de palavras, verifique quais são palíndromos.

let palavras = ["ana", "carro", "radar", "mundo", "arara"];

for (let i = 0; i < palavras.length; i++){
    let palavra = palavras[i];
    let invertida = [];

    for (let j = palavra.length - 1; j >= 0; j--){
        invertida += palavra[j];
    }

    if (palavra === invertida){
        console.log(`${palavra} é um palíndromo.`);
    }
}