const numeros = [5, 10, 15, 20, 25, 30];
const maioresQueDez = [];

numeros.forEach(numero => {
  if (numero > 10) {
    maioresQueDez.push(numero);
  }
});

console.log(maioresQueDez);