// metodos de manipulação de vetores

let frutas = ['laranja', 'banana', 'maca', 'uva'];

frutas[4] = 'morango';
document.writeln(`<p>Os itens do nosso vetor são: ${frutas}</p>`);

frutas.push('uva');
document.writeln(`<p>Agora, os itens do nosso vetor são: ${frutas}</p>`);

frutas.unshift('manga');
document.writeln(`<p>Agora, os itens do nosso vetor são: ${frutas}</p>`);

//metodo length: retorna o número de elementos do vetor

document.writeln(`<p>O número de elementos do vetor é: ${frutas.length}</p>`);

//metodo sort: ordena o vetor em ordem alfabética

let frutasOrdenadas = frutas.sort();
document.writeln(`<p>Agora, os itens do nosso vetor são: ${frutasOrdenadas}</p>`);

//metodo sort: Ordenando em ordem CRESCENTE e DECRESCENTE
let numeros = [6,7,2,9,3,800,200]

document.writeln(`<p>Os números ordenados são ${numeros}</p>`);

document.writeln(`<p>Os números ordenados são: ${numeros.sort()}</p>`);
