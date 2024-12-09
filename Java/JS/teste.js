// Importa o módulo mysql2
const mysql = require('mysql2');

// Cria a conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'internal-db.s33724.gridserver.com', // Endereço do servidor do banco
  user: 'ACADEMICO/ead',      // Nome de usuário do banco
  password: '',    // Senha do banco
  database: 'db33724_openbeer_db' // Nome do banco de dados
});

// Tenta conectar ao banco
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
    return;
  }
  console.log('Conexão estabelecida com sucesso!');
});

// Exemplo de consulta
connection.query('SELECT * FROM sua_tabela', (err, results, fields) => {
  if (err) {
    console.error('Erro na consulta:', err.message);
    return;
  }
  console.log('Resultados:', results);
});

// Fecha a conexão
connection.end();
