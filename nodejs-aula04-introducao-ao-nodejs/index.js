// index.js é o arquivo principal do back-end

//Importando o express para o projeto

const express = require("express");

const app = express(); //criando uma instância do express

//configurando ejs

app.set('view engine', 'ejs');


//Método do Express para inciar o servido back-end
//app.listen()
//Aqui irão as rotas do site:
//Rota principal
// .get() -> cria uma rota na aplicação


app.get("/", (req, res) => {
    res.render("index");
});

//rota de produtos

app.get("/produtos", (req, res) => {
    res.render("produtos");
})

//inciando o servidor na porta 8080

const port = 8080;

app.listen(port, (error) => {
  //Tratando erros de inicialização
  if (error) {
    console.log(`Ocorreu um erro ao ninicar o servidor. Erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
