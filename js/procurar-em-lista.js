const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeNota(aluno) {
    if (lista[0].includes(aluno)) {
        // Retorna o índice do aluno
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice]; // Acessa a média do aluno
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log('Estudante não existe na lista');
    }
}

exibeNomeNota('Juliana');
exibeNomeNota('vini');
