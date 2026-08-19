//Vetores no javascript

let produtos = ["Computador", "Notebook", "Celular", "Tablet"]

let aluno = "Luiz"

document.writeln(`O tipo da variavel que recebe um vetor no javascript é <strong>${typeof(produtos)}</strong><br>`);


document.writeln(`O tipo da variavel que recebe uma variável no javascript é <strong>${typeof(aluno)}</strong><br>`);

document.writeln("Exibindo os itens do vetor pelo índice: <br>")

document.writeln(`<p>${produtos}</p>`);

document.writeln("Exibindo apenas um item do vetor pelo índice: <br>");
document.writeln(`<p>${produtos[0]}</p>`);
document.writeln(`<p>${produtos[1]}</p>`);
document.writeln(`<p>${produtos[2]}</p>`);
document.writeln(`<p>${produtos[3]}</p>`);

document.writeln("Exibindo apenas um item do vetor pelo <strong>forEach</strong>: <br>");
produtos.forEach(produto =>{
    //para cada produto da lista de produtos
    //faça tal coisa
    document.writeln(`<p>${produto}</p>`);
}); 
