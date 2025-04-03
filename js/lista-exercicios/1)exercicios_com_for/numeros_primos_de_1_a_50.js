//Exiba todos os números primos de 1 a 50.

for (let i = 2; i <= 50; i++){
    let primo = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0){
            primo = false;
            break;
        }
    }

    if (primo){
        console.log(i);
    }
}

//explicando a lógica: um número primo é um número que só é divisível por 1 e por ele mesmo. Então, para saber se um número é primo, basta testar se ele é divisível por qualquer número entre 2 e ele mesmo. Se for, ele não é primo. Se não for, ele é primo.