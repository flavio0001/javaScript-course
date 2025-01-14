// Inicializa a matriz bidimensional vazia
const matriz = [];

// Contador para os valores
let contador = 1;

// Loop externo para criar as linhas
for (let i = 0; i < 3; i++) {
    // Inicializa uma linha vazia
    const linha = [];

    // Loop interno para criar as colunas
    for (let j = 0; j < 3; j++) {
        // Cria a matriz 3x3 para cada elemento da linha
        const submatriz = [];
        for (let k = 0; k < 3; k++) {
            const sublinha = [];
            for (let l = 0; l < 3; l++) {
                sublinha.push(contador++); // Adiciona o valor e incrementa o contador
            }
            submatriz.push(sublinha);
        }
        linha.push(submatriz); // Adiciona a matriz 3x3 à linha
    }

    matriz.push(linha); // Adiciona a linha à matriz bidimensional
}

console.log(matriz);
