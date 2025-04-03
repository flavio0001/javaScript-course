const notas = [8, 6, 7, 9, 10];
let soma = 0;

notas.forEach(nota => {
    soma += nota;
});

let resultado = soma / notas.length;

console.log(resultado);