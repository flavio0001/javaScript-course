const itens = ['maçã', 'banana', 'laranja', 'maçã', 'uva', 'maçã'];
let totalMacas = 0;

itens.forEach(item => {
  if (item === 'maçã') {
    totalMacas++;
  }
});

console.log("A palavra 'maçã' aparece", totalMacas, "vezes no array.");
