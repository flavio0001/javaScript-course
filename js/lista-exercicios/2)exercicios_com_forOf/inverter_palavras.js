//Inverta cada palavra do array ["amor", "luz", "vida"].

const palavras = ["amor", "luz", "vida"];
const invertidas = [];

for (const palavra of palavras){
    let invertida = "";
    for (const letra of palavra){
        invertida = letra + invertida;
    }

    invertidas.push(invertida);
}

console.log(invertidas);

//explicação do código: a variável invertida é inicializada como uma string vazia. Em seguida, para cada letra da palavra, a letra é concatenada à frente da string invertida. Dessa forma, a palavra é invertida. Por fim, a palavra invertida é adicionada ao array invertidas.