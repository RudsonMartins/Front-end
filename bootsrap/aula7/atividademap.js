// Definindo as receitas em categorias
const receitas = {
    salgado: [
        { nome: "Coxinha", descricao: "Coxinha de frango com catupiry." },
        { nome: "Pão de Queijo", descricao: "Pão de queijo mineiro." }
    ],
    doce: [
        { nome: "Brigadeiro", descricao: "Brigadeiro de leite condensado." },
        { nome: "Pavê", descricao: "Pavê de chocolate com creme." }
    ],
    sucos: [
        { nome: "Suco de Laranja", descricao: "Suco de laranja natural." },
        { nome: "Suco Verde", descricao: "Suco detox com couve, maçã e limão." }
    ]
};


function exibirReceitas() {
   
    const salgadoList = document.getElementById("salgado-list");
    const doceList = document.getElementById("doce-list");
    const sucosList = document.getElementById("sucos-list");

    function adicionarReceitas(lista, receitasCategoria) {
        
        const itens = receitasCategoria.map(receita => {
            const li = document.createElement("li");
            li.innerHTML = `<strong>${receita.nome}</strong>: ${receita.descricao}`;
            return li; 
        });
        
        itens.forEach(item => lista.appendChild(item));
    }

    adicionarReceitas(salgadoList, receitas.salgado);
    adicionarReceitas(doceList, receitas.doce);
    adicionarReceitas(sucosList, receitas.sucos);
}

exibirReceitas();
