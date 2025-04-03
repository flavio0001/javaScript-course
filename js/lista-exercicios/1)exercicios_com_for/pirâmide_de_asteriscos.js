//Monte uma pirâmide de asteriscos com 5 linhas.

let linhas = 5;
for (let i = 1; i <= linhas; i++){
    let linha = "";

    for (let j = 1; j <= i; j++){
        linha += "*";
    }

    console.log(linha);
}