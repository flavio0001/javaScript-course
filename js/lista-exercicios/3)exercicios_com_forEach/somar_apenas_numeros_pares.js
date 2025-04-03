const numeros = [3, 6, 9, 12];
let somaPares = 0;

numeros.forEach((n) => {
  if (n % 2 === 0) {
    somaPares += n;
  }
});

console.log("Soma dos pares:", somaPares);