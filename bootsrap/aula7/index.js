// Promise é uma promessa
// resolve - Promessa cumprida
// reject - Promessa não cumprida

const promise = new Promise((resolve, reject) => {
    let nome = 'victor'; // Altere para 'victor' para ver o resultado positivo.

    if (nome === 'victor') {
        resolve('Nome válido'); // Promessa cumprida
    } else {
        reject('Nome inválido'); // Promessa rejeitada
    }
});

// Consumindo a Promise
promise
    .then((message) => {
        // O que acontece quando a promessa é cumprida
        console.log(message);
        // Chamando outra função ou ação aqui, se necessário
        alerta(message);
    })
    .catch((error) => {
        // O que acontece quando a promessa não é cumprida
        console.error(error);
    });

// Exemplo de função chamada no .then
function alerta(mensagem) {
    alert(`Alerta: ${mensagem}`);
}

// Função sujeitodemorado retorna uma Promise
function sujeitodemorado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Morado resistiu');
        }, 5000); // Simula uma tarefa demorada de 2 segundos
    });
}

// Função assíncrona para lidar com a Promise
async function carregandoconteudo() {
    console.log('Oi');
    
    const resultado = await sujeitodemorado(); // Aguarda a resolução de sujeitodemorado
    console.log(resultado);

    console.log('Término');
}

// Chamada da função carregandoconteudo
carregandoconteudo();
