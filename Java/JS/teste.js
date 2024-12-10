
const mysql = require('mysql2');

// Cria a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost', // Endereço do servidor do banco
  user: 'root',      // Nome de usuário do banco
  password: 'senai@123',    
  database: 'w3schools' // Nome do banco de dados
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conexão estabelecida com sucesso!');
});

connection.query('SELECT * FROM sua_tabela', (err, results, fields) => {
  if (err) {
    console.error('Erro na consulta:', err.message);
    return;
  }
  console.log('Resultados:', results);
});

connection.end();
