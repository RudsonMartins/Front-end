document.querySelector('#cep').addEventListener('focusout', pegarCep);

    function pegarCep() {
        const cep = document.querySelector('#cep').value;

        if (cep.length === 8 && /^\d+$/.test(cep)) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(dados => {
                    console.log(dados);
                    if (dados.erro) {
                        alert('CEP não encontrado!');
                    } else {
                        document.getElementById('estado').value = dados.uf;
                        document.getElementById('cidade').value = dados.localidade;
                    }
                })
                .catch(error => {
                    console.error('Erro ao buscar o CEP:', error);
                });
        } else {
            alert('Por favor, insira um CEP válido.');
        }
    }