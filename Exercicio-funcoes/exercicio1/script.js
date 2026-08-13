// função simples

function showMessage() {
    const message = "Luiz Cubas, 18 anos, Registro-SP";
    document.write(message);
}

showMessage();

//função com parametros
const n1 = 10;
const n2 = 20;

function divisao(n1, n2) {
    let resultado = n1 / n2;
    document.write(`A divisão de ${n1} por ${n2} é ${resultado}`);
}

divisao(n1, n2);

//função com retorno

const n1 = 10;
const n2 = 4;
const n3 = 5;

function multiplicar(n1, n2, n3){
    return n1 * n2 * n3;
}

document.write(`O resultado da multiplicação de ${n1} por ${n2} por ${n3} é igual a ${multiplicar(n1, n2, n3)}`);

//função com mais de um retorno

const numero = 18;
function idade(numero){
    if (numero >= 18){
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

document.write(`O usuário é ${idade(numero)}`);

//função anonima

//média =(nota1 + nota2) / 2
const aprovado = function(){
    const notas = [10, 5,];
    const media = (nota1 + nota2) / 2;

    if (media <= 5 ){
        return "Reprovado";
    } else {
        return "Aprovado";
    }
    
}

document.write(`<p>O aluno foi ${aprovado()}</p>`);

//função seta com um parametro

const triplo = y => {return y * 3};

const y = 9;

document.write(`<p>O Triplo do número é ${triplo(y)} .</p>`);

//função seta com mais de um parametro

const calc = (n1, n2, n3, n4, op) => { return eval(`${n1} ${op} ${n2} ${op} ${n3} ${op} ${n4}`);};

const n1 = 10;
const n2 = 20;
const n3 = 30;
const n4 = 40;
const op = "+";

document.write(`<p>O resultado da operação é ${calc(n1, n2, n3, n4, op)} .</p>`);

const user = (function(Nome){
   document.writeln(`<p>Olá! caro usuário ${user}</p>`); 
   
})("Luiz");