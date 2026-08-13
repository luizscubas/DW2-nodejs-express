// funções com retorno

const n1 = 50;
const n2 = 10;

// Essa função gera um resultado e exporta
function multiplicar(n1,n2){
    return n1 * n2;
};

// Exibindo o resultado de uma função
document.write(`<p>O resultado da multiplicação de ${n1} por ${n2} é igual a <strong>${multiplicar(n1, n2)}</strong>.</p>`);

const number = 4;


//função com mais de um retorno
function parImpar(number){
    if (number % 2 === 0){
        return "par";
    } else {
        return "Impar";
    }
};

document.write(
    `<p>O número ${number} é ${parImpar(number)}</p>`
);
