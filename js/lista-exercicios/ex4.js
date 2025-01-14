/*5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista. */
const clinica = [];
//adicionando a chegada dos animais 1 por vez
clinica.push('Cachorro');
clinica.push('Gato');
clinica.push('Coelho');
console.log("chegada dos animais:", clinica);
//removendo os animais 1 a 1
clinica.shift("Cachorro");
clinica.shift("Gato");
clinica.shift("Coelho");
console.log("saída dos animais:", clinica);