//Dado o array ["João", "Maria", "Carlos"], exiba no console: "Olá, João!", "Olá, Maria!", etc.

const nomes = ["João", "Maria", "Carlos"];

for (const nome of nomes){
    console.log(`Olá ${nome}!`);
}