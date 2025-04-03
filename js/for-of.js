const notas = [6.5, 7.3, 7.8, 3.0];

let somaDasnotas = 0;
for (let nota of notas) {
    somaDasnotas += nota;
}

let media = somaDasnotas / notas.length;
console.log(media);