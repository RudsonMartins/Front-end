//var fruta = 'Melancia'
//var fruta1 = 'Tomate'
//var fruta2 = 'Melão'
//var fruta3 =  'Maracujá'
//var fruta4 = 'Mexirica'
let fruta = ['melancia', 'Tomate', 'Melão', 'Maracuja', 'Mexirica'];

let teste = Array();
teste[0] = 'olha'; 
teste[1] = 'que';
teste[2] = ' op';

console.log(fruta);
console.log(fruta[1]);

// PUSH 'Empurrar' - Adicionar na lista
fruta.push('uva');
console.log(fruta);

// UNSHIFT - ADICIONAR NO COMEÇO DA LISTA
fruta.unshift("Abacate");
console.log(fruta);

// POP - REMOVER O ÚLTIMO ADICIONADO
fruta.pop();
console.log(fruta);

// SHIFT - REMOVER O PRIMEIRO
fruta.shift();
console.log(fruta);

// SPLICE - REMOVE, ADICIONA E ATUALIZA
fruta.splice(2, 3); // Remove 3 elementos a partir do índice 2
fruta.splice(2, 0, 'Morango'); // Adiciona 'Morango' na posição 2
console.log(fruta);

fruta.push('Abacaxi');

// Loop para exibir as frutas no HTML
for (let i = 0; i < fruta.length; i++) {
    document.getElementById('resposta').innerHTML += `${fruta[i]}<br>`;
}

// Usando forEach para adicionar frutas na tela
fruta.forEach(frutaItem => {
    document.getElementById('resposta').innerHTML += `${frutaItem}<br>`;
});
