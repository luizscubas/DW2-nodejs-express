const produto = {
    nome: "Computador",
    marca: " Dell",
    preco: "3000",
    descricao: "Notebook Dell i5 8GB RAM",
};

//modo errado

document.writeln(`${produto}`);

//modo correto

document.writeln(`<p>${produto.nome}, ${produto.marca}, R$ ${produto.preco} <br> ${produto.descricao}</p>`);

//Array de objetos
document.writeln("<h3>Lista de produtos:</h3><br>");

const listaProdutos = [
    {
        nome: "Computador",
        marca: "Dell",
        preco: "3000",
        descricao: "Notebook Dell i5 8GB RAM",
    },
    {
        nome: "Notebook",
        marca: "HP",
        preco: "2500",
        descricao: "Notebook HP i5 8GB RAM",
    },
    {
        nome: "Celular",
        marca: "Samsung",
        preco: "2000",
        descricao: "Celular Samsung i5 8GB RAM",
    },
    {
        nome: "Tablet",
        marca: "Apple",
        preco: "1500",
        descricao: "Tablet Apple i5 8GB RAM",
    },
    {
        nome: "Smart TV",
        marca: "LG",
        preco: "4000",
        descricao: "Smart TV LG 4K",
    },
];

//usando forEach para mostrar as informações dos produtos

document.writeln(`<h4>Produtos em promoção:</h4>`);

listaProdutos.forEach(function (produto) {
    document.writeln(`<p>Produto: ${produto.nome}<br>
        marca: ${produto.marca}<br>
        preço: R$ ${produto.preco}<br>
        descricao: ${produto.descricao}</p>`);
});