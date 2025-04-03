const numeros = [3, 6, 9, 12, 15];
let encontrado = false;

numeros.forEach(numero => {
  if (numero === 9) {
    encontrado = true;
  }
});

if (encontrado) {
  console.log("Número encontrado!");
} else {
  console.log("Número não encontrado!");
}
