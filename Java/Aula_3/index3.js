function carregarcatalago() {
    // Corrigindo o array de filmes e incluindo vírgulas entre os itens
    var filmes = [
        ['fimes/poderos chefão.webp', 'O Poderoso Chefão'],
        ['fimes/origem.jpg', 'A Origem'],
        ['fimes/batman.jpg', 'O Cavaleiro das Trevas'],
        ['fimes/inter.jpg', 'Interestelar'],
        ['fimes/circulo.jpg', 'Círculo De Fogo'],
        ['fimes/Blade.jpg', 'Blade']
    ];

    // Exibe os filmes do array de forma dinâmica
    filmes.forEach(cadaFilme => {
        document.getElementById('catalago').innerHTML += `
        <div class="filme">
            <img src="${cadaFilme[0]}" alt="${cadaFilme[1]}">
            <h4>${cadaFilme[1]}</h4>
            <button>
                Adicionar
                <img src="/imagens/plus-circle.svg" alt="Adicionar">
            </button>
        </div>
        `;
    });

}

carregarcatalago();