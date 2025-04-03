let arrayDePalavras = ["amor", "carro", "macaco", "bruxa"];
let invertido = [];

for (let i = 0; i < arrayDePalavras.length; i++) {
  let palavra = arrayDePalavras[i];
  let palavraInvertida = "";

  for (let j = palavra.length - 1; j >= 0; j--) {
    palavraInvertida += palavra[j];
  }

  invertido.push(palavraInvertida);
}

console.log(invertido);