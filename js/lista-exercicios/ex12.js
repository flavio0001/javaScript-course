/**Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos. */

const listaNumeros = [6, 10, 55, 100, 1105, 111, 200, 500, 400];

function somaElementos(listaNumeros) {
  let soma = 0;
  for (let i = 0; i < listaNumeros.length; i++) {
    soma += listaNumeros[i];
  }
  return soma;
}

console.log(somaElementos(listaNumeros));
