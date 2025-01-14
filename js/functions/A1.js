//As funções declaradas são aquelas definidas com a palavra-chave function.
//As funções declaradas são carregadas antes de qualquer código JavaScript ser executado.
/* 1. Escreva uma função chamada multiplicar que receba dois números como parâmetros e retorne o produto deles. */
function multiplicar(a, b){
    return a * b;

}
console.log(multiplicar(2, 6));

//outro exemplo para melhor compreenção
function instrucao(saldacao, mensagemAlerta){
    return saldacao + " " + mensagemAlerta;
}
console.log(instrucao("Olá", "Use máscara"));

/* 2. Crie uma função chamada saudacao que receba o nome de uma pessoa e exiba uma mensagem como "Olá, [nome]!". */

function saldacao(nome) {
    return "Olá, " + nome + "!";
}
console.log(saldacao("Lucas"));

