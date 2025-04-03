const nomes = ["alex durex", "joão cabeçao", "jacinto pinto", "maria do bairro", "perna torta", "kico na vara"];

// Lista de nomes que queremos verificar
const verificar = ["kico na vara", "volinrabah"];

for (let i = 0; i < verificar.length; i++) {
    const aluno = verificar[i];
    if (nomes.includes(aluno)) {
        console.log(`O aluno ${aluno} está presente.`);
    } else {
        console.log(`O aluno ${aluno} não veio. Infelizmente o futuro destes provavelmente hoje é cadeia ou cemitério.`);
    }
}
