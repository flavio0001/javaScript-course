//Dado ["casa", "janela", "porta"], crie um novo array com tudo em maiúsculas.

const palavras = ["casa", "janela", "porta"];
const palavrasMaiusculas = [];

for (const palavra of palavras){
    maiusculas.push(palavra.toUpperCase());
}

console.log(maiusculas); // ["CASA", "JANELA", "PORTA"]