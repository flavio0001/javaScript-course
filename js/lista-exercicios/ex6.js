//2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um 
const listaNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listadividida = listaNumeros.slice(0, listaNumeros.length / 2);
const listadividida2 = listaNumeros.slice(listaNumeros.length / 2);
console.log(listadividida, "Quebra", listadividida2);