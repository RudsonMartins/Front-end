
const filmes = {
    nome: 'Sociedade da Neve',
    Desc: 'Lorem',
    genero: 'drama',
};


console.log(filmes);
console.log(filmes.nome);


const filmesEntries = Object.entries(filmes);
console.log(filmesEntries);

const nomeFilmes = ['Bruxa de Blair', 'Interstitial', 'Velozes e Furiosos'];
console.log(nomeFilmes);

const listafilmes = {
    filmes: [
        {
            nome: 'Bruxa de Blair',
            desc: 'Lorem',
            genero: 'drama',
        },
        {
            nome: 'Velozes e Furiosos',
            desc: 'Ação e carros velozes',
            genero: 'ação',
        },
        {
            nome: 'Sociedade da Neve',
            desc: 'Uma emocionante história de sobrevivência',
            genero: 'drama',
        }
    ]
};


const resultados = nomeFilmes.map((cadafilme) => {

    const filmeDetalhes = listafilmes.filmes.find((filme) => filme.nome === cadafilme);

    if (filmeDetalhes) {
        document.querySelector('body').innerHTML += `
            <h2>${cadafilme}</h2>
            <p>${filmeDetalhes.desc}</p>
            <p>${filmeDetalhes.genero}</p>
        `;
    } else {
        console.error(`Detalhes do filme "${cadafilme}" não encontrados!`);
    }
});

console.log(resultados);
