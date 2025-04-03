//Crie uma função que receba uma string e retorne a quantidade de vogais (a, e, i, o, u) nela.

function contarVogais(texto){
    let contador = 0;
    let vogais = 'aeiou';

    for (let letra of texto){
        if (vogais.includes(letra)){
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("Programação é um trem muito legal não é mesmo?"))