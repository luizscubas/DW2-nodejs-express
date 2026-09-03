// index.js :arquivo principal do back-end

// importando o express.js para o projeto
const express = require("express") // forma clássica (CommonJS Modules);

const app = express() // Criando uma instância do Express

// configurando o ejs
app.set('view engine', 'ejs');

// aqui irão as rotas do site
// rota principal
// .get() -> cria uma rota na aplicação
app.get("/", (req, res) =>{
    res.render('index');
});

// rota de produtos

app.get("/produtos", (req, res) =>{
    //lista de produtos(dados mockados)
    //Futuramente os dados virão do banco de dados
    // Array de objetos
    const produtos = [
        {nome: "computador", marca: "Dell", preco: 4000, },
        {nome: "Tablet", marca: "Asus", preco: 2500, },
        {nome: "celular", marca: "Samsung", preco: 1500, },
        {nome: "notebook", marca: "Avell", preco: 6500, }
    ]


    res.render('produtos', {produtos});
});

//rota de serviços

app.get("/servicos", (req, res) =>{
    res.render('servicos');
})

// rota clientes

app.get("/clientes", (req, res) =>{
    const clientes = [
        {nome: "Luiz", cpf: "123.456.789-00"},
        {nome: "Letícia", cpf: "321.123.456-90"},
        {nome: "Pedro", cpf: "222.333.444-55"},
        {nome: "Tamashirp", cpf: "555.555.555-55"}
    ];
    res.render('clientes', {
        clientes: clientes,
    });
});

// rota perfil

app.get("/perfil", (req, res) =>{
    res.render('perfil');
});




// Método do Express para iniciar o servidor back-end
// app.listen()
const port = 8080;
app.listen(port, (error) => {
    // tratando erros de inicialização
    if(error){
        console.log(`Ocorreu um erro ao iniciar o servidor. Erro: ${error}`)
    // em caso de sucesso
    } else {
        console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
    }
})