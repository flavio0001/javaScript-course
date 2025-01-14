const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];
console.log(lista);


//abaixo vamos acessar o nome da aluna da posição 1 da lista
console.log(
    `a aluna da posição 1 da lista é: ${lista[0][1]}.
    A média dela é: ${lista[1][1]}`
    );
    /* anteriormente, acessamos a lista na posição 0. Só que agora desejamos acessar um índice que está dentro do array de alunos.
E podemos passar para o JavaScript: entre no array de posição 0 e dentro dele acesse um elemento. A mesma coisa funciona também para o array de medias.*/
