//var cliente = "leo"
//var clientecpf = 99999
//var clienteEmail = 'email@gmail'
//var clientetelefone = 9999999
//var clienteTipoconta ='fisico'
//var saldo = 0
//var clienteNome2 = 'Alesandra'


class Cliente {
    // Constructor to initialize properties
    constructor(nome, dataNascimento, cpf, email, telefone, tipodeconta, saldo = 0) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.email = email;
        this.telefone = telefone;
        this.tipodeconta = tipodeconta;
        this.saldo = saldo;
    }

    
    depositar(valor) {
        this.saldo += valor;
        console.log(`Pix de valor ${valor} foi depositado com sucesso`);
    }

    pix(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Pix de valor ${valor} foi efetuado com sucesso`);
        } else {
            console.log("Saldo insuficiente para realizar o Pix");
        }
    }
}

var cliente1 = new Cliente('Léo', '10/10/2010', '00.000.000-00', 'leozin231@gmail.com', '61981332874', 'Conta corrente');

// Testing the deposit and Pix
cliente1.depositar(); // Deposit 500
cliente1.pix();       // Make a Pix of 100

console.log(cliente1);    // Log the client details
