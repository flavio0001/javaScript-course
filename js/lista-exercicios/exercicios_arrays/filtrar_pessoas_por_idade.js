//Problema: Dado um array de objetos {nome, idade}, retorne apenas os nomes de quem tem mais de 18 anos.

const pessoas = [
    { nome: 'João', idade: 17 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Pedro', idade: 19 }
];
const maiores = pessoas.filter(p => p.idade > 18).map(p => p.nome);
console.log(maiores);

//Explicando a problemática ponto a ponto. Temos o array de objetos pessoas, onde cada objeto tem duas propriedades: nome e idade. Queremos filtrar apenas as pessoas que têm mais de 18 anos. Para isso, usamos o método filter, que retorna um novo array com os elementos que passam no teste da função de callback. A função de callback recebe cada objeto do array e verifica se a idade é maior que 18. Se for, o objeto é incluído no novo array. Por fim, usamos o método map para transformar o array de objetos filtrados em um array de nomes, pegando apenas a propriedade nome de cada objeto. O resultado final é um array com os nomes das pessoas que têm mais de 18 anos.