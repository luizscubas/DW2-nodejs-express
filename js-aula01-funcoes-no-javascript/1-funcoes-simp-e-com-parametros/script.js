function showMessage() {
  const message = "<h2>Olá! bem-vindo</h2>";
  document.writeln(message);
}

// invocando a função
showMessage();

// Função com parâmetro / Argumento

const user = "luiz";

function userMessage(user) {
  document.write(`<h3> O que deseja fazer hoje, ${user}? </h3>`);
}

// Invocando a função passando um argumento
userMessage(user);

//Função com mais de um parâmetro

const n1 = 10;
const n2 = 20;

function soma(n1, n2) {
  let resultado = n1 + n2;
  document.write(`a soma de ${n1} e ${n2} é ${resultado}`);
}

soma(n1, n2);
