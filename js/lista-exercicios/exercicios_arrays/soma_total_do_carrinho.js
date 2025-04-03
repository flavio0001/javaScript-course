//Problema: Dado um array de produtos {nome, preco}, calcule o valor total da compra.

const produtos = [
    { nome: 'notebook', preco: 5700 },
    { nome: 'Teclado gamer redragon', preco: 360.99 },
    { 'nome': 'smart tablet for digital drawing', preco: 2600 },
    { nome: 'Super pen design', preco: 490.75 },
    { nome: 'Mouse Gamer Redragon Impact M908', preco: 299.50 }
];
const total = produtos.reduce((soma, p) => soma + p.preco, 0);
console.log(total);