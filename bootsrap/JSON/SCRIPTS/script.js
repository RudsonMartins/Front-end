// CRUD
// CREATE
// READ
// UPDATE
// DELETE

document.querySelector('#logar').addEventListener('click', logar);

function logar() {
    let nome_digitado = document.querySelector('#nome').value;
    let senha_digitada = document.querySelector('#senha').value;

    fetch('SCRIPTS/dados.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return response.json();
        })
        .then((dados) => {
            let login = false;
            let nome_salvo = '';

        
            dados.usuarios.forEach((informacoes) => {
                if (informacoes.nome === nome_digitado && informacoes.senha === senha_digitada) {
                    login = true;
                    nome_salvo = informacoes.nome; 
                }
            });

            if (login) {
                alert('Login efetuado com sucesso!');
                localStorage.setItem('nome', nome_salvo); 
                window.location.href = '/home.html'; 
            } else {
                alert('Usuário ou senha inválidos!');
            }
        })
}
