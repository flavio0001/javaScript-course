//Dado o array [12, 67, 89, 34, 100], conte quantos são maiores que 50.


const valores = [12, 67, 89, 34, 100];
let contador = 0;

for (const valor of valores) {
  if (valor > 50) {
    contador++;
  }
}

console.log("Valores maiores que 50:", contador);