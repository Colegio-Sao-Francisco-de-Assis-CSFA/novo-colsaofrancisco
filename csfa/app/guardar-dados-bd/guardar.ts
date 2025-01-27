const mysql = require('mysql2');
const fs = require('fs');

interface ParsedData {
  id: number;
  nome: string;
  email: string;
  setor: string;
}

// Função para capitalizar o nome
function capitalizeName(name: string): string {
  return name
    .split(' ') // Divide o nome em partes
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza a primeira letra de cada palavra
    .join(' '); // Junta de volta as palavras com espaço
}

// Configurações do banco de dados MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'apadges',
  charset: 'utf8mb4' // Garantir compatibilidade com o banco
};

// Criar uma conexão com o banco de dados
const connection = mysql.createConnection(dbConfig);

connection.connect((err: any) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados!');
});

// Ler o arquivo JSON
const filePath = './dados/dados.json'; // Substitua pelo caminho do seu arquivo JSON

fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string) => {

  if (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data) as ParsedData[];

    jsonData.forEach((item: ParsedData) => {
      // Capitaliza o nome antes de inserir
      item.nome = capitalizeName(item.nome);

      // Verificar se o usuário já existe
      const checkQuery = `SELECT id FROM usuario WHERE id = ? OR email = ?`;

      connection.query(checkQuery, [item.id, item.email], (err: any, results: any) => {

        if (err) {
          console.error('Erro ao verificar existência do usuário:', err);
          return;
        }

        if (results.length > 0) {
          console.log(`Usuário com ID ${item.id} ou Email ${item.email} já cadastrado. Pulando...`);
        } else {
          // Usuário não existe, inserir no banco
          const insertQuery = `INSERT INTO usuario (id, nome, email, setor) VALUES (?, ?, ?, ?)`;

          connection.query(insertQuery, [item.id, item.nome, item.email, item.setor], (err: any, results: any) => {
            if (err) {
              console.error('Erro ao inserir usuário:', err);
              return;
            }
            console.log(`Usuário ${item.nome} inserido com sucesso! ID: ${results.insertId}`);
          });
        }
      });
    });
  } catch (error) {
    console.error('Erro ao processar o arquivo JSON:', error);
  }
});

// Fechar a conexão ao finalizar o processo
process.on('exit', () => {
  connection.end((err: any) => {
    if (err) {
      console.error('Erro ao fechar a conexão com o banco de dados:', err);
    } else {
      console.log('Conexão com o banco de dados encerrada.');
    }
  });
});
