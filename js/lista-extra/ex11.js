const cores = ['vermelho', 'azul', 'verde', 'amarelo'];
const coresComIndice = [];

cores.forEach((cor, indice) => {
  coresComIndice.push(`${indice}: ${cor}`);
});

console.log(coresComIndice);