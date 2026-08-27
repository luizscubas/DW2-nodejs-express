document.writeln(`<h3>Manpulando Datas:</h3>`)

//Para começarmos a manipular datas no Javascript, precisamos criar uma variável do tipo Date, nativa da linguagem

const data = new Date(); 

document.writeln(data);

//pegando dia atual
const dia = data.getDate(); 
document.writeln(`<br><p>Hoje é dia: ${dia}</p>`)

//pegando mes atual
const mes = data.getMonth()+1; 
document.writeln(`<br><p>O mês atual é: ${mes}</p>`);

//pegando ano atual
const ano = data.getFullYear();
document.writeln(`<br><p>O ano atual é: ${ano}</p>`);

//exibindo data completa: 
document.writeln(`<br><p>Hoje é: ${dia}/${mes}/${ano}</p>`);

//adicionando dias , meses e anos a data atual
//adicionando 4 dias à data atual:

data.setDate(data.getDate() + 4);
document.writeln(`<p>Daqui a 4 dias será: ${data.getDate()}</p>`);

//adicionando 3 meses à data atual:

data.setMonth(data.getMonth() + 3);
document.writeln(`<p>Daqui a 3 meses será: ${data.getMonth()}</p>`);

//adicionando 2 anos à data atual:

data.setFullYear(data.getFullYear() + 2);
document.writeln(`<p>Daqui a 2 anos será: ${data.getFullYear()}</p>`);