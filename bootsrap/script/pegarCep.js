document.querySelector('#cep').addEventListener('blur', pegarCep);

function pegarCep() {
    const cep = document.querySelector('#cep').value;

    // Limpar campos antes de começar a nova busca
    document.getElementById('estado').value = '';
    document.getElementById('cidade').value = '';

    // Exibe a mensagem de carregamento
    document.getElementById('loading').style.display = 'block';

    // Verifica se o CEP tem exatamente 8 dígitos numéricos
    if (cep.length === 8 && /^\d+$/.test(cep)) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(dados => {
                document.getElementById('loading').style.display = 'none'; // Esconde o carregamento

                // Verifica se o CEP retornou um erro
                if (dados.erro) {
                    alert('CEP não encontrado!');
                } else {
                    console.log(dados);  // Verifica o que está sendo retornado pela API

                    // Atualiza os campos de "estado" e "cidade" com os dados retornados
                    document.getElementById('estado').value = dados.uf;
                    document.getElementById('cidade').value = dados.localidade;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                document.getElementById('loading').style.display = 'none'; // Esconde a mensagem de carregamento
                alert('Erro ao buscar o CEP.');
            });
    } else {
        document.getElementById('loading').style.display = 'none'; // Esconde o carregamento
        alert('Por favor, insira um CEP válido.');
    }
}
