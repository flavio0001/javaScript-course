function saudacao(nome, callback) {
    console.log("Olá, " + nome + "!");
    callback();
  }
  
  // Função callback personalizada
  function mensagemFinal() {
    console.log("Bem-vindo ao nosso sistema!");
  }
  
  // Passando o callback para a função
  saudacao("João", mensagemFinal);
  
