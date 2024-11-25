class User {
    constructor(id_user, nome, dataNascimento, email, telefone, genero) {
        this.id_user = id_user;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.telefone = telefone;
        this.genero = genero;
        this.postar = function(pensamento){
            document.querySelector("#resposta").innerHTML += `
                <div id="post">
                    <h3>${this.nome}</h3>
                    <p>${pensamento}</p>
                </div>
            `;
        }
    }
}

var user1 = new User('2404', 'Rudson', '10/10/2001', 'email@gmail.com', '61981332386', 'Masculino');

function postarFeed() {
    let pensamento = document.querySelector('#pensamento').value;
    user1.postar(pensamento);
}
