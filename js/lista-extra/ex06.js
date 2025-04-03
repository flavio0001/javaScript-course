const nomes = ['Ana', 'Bruno', 'Carlos', 'Débora'];

let resultado = [];

nomes.forEach((nome, index) => {
    resultado += nome;

    if (index < nomes.length - 1){
        resultado += ', ';
    }
});

console.log(resultado);