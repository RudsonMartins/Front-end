function testes() {
    // O loop while
    // let contador = 0;
    // while (contador < 3) {
    //     alert(`Tchau, FIZ ${contador} vezes`);
    //     contador++;
    // }

    // O loop for
    for (var i = 0; i < 30; i++) {
        alert(`Que maneiro!!! FIZ ${i} vezes`);
    }
}
function carregarcatalago(){
    for(let i = 0; i < 4;i++){
        document.getElementById('catalago').innerHTML += `<div class="livro">
            <img src="/livros/O_Jardim_das_Aflições_(2017)_Poster.jpg" alt="">
            <h4>Jardim das O Jardim das Aflições</h4>
            <button>
                adicionar
                <img src="/imagens/plus-circle.svg" alt="">
            </button>
        </div> `
    }
}
carregarcatalago();