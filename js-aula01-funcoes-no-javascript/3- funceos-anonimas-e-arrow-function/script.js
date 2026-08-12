//Função anonima


const multi = function (x) {
    return x * 2
};

const x = 12;

document.write(`<p>O resultado da multiplicação é ${multi(x)} .</p>`);

// Funcão seta com um UNICO parametro

// o símbolo => substitui a palavra function
// tornando código mais limpo
const triplo = (y) => { return y * 3};

const y = 9;


document.write(`<p>O resultado da multiplicação é ${triplo(y)} .</p>`);

//Função seta com mais de um parametro

const calc = (n1, op, n2) => { 
    return eval(`${n1} ${op} ${n2}`);
};

//eval no Javascript é uma função nativa 

const n1 = 8;
const op = '+';
const n2 = 12;

document.write(`<p>O resultado da operação é ${calc(n1, op, n2)} .</p>`);


//Função imediata (IIFE - Immediately Invoked Function Expression)

const imediata = (function() {
  document.writeln(`<p>Esta função foi executada imediatamente após ser escrita. </p>`);
}
 )(); //passando os parametros

 // função imediata com parametro 

const loadUser = (function(user){
document.writeln(`<p>Carregando as informações do usuário: ${user}!</p>`)


setTimeout(()+.{
    Document.writeln(`
        Nome: Luiz Cubas <br>
        Idade: 18 anos <br>
        Cidade: Registro <br>
        Hobby: amassar os crias
        `)
}, 3000);
 })("Luiz");