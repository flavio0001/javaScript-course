//Dado const notas = [7, 8.5, 6, 9], calcule a média.
//array contendo as notas
const notas = [7, 8.5, 6, 9];
//variável para armazenar a soma das notas
let total = 0;

//abaixo um for para somar as notas. Ele percorre o array notas e, para cada nota, adiciona o valor à variável total.
for (const nota of notas){
    total += nota;
}
//abaixo a média é calculada dividindo o total pela quantidade de notas.
const media = total / notas.length;
//abaixo a média é exibida no console.
console.log("A média é", media);