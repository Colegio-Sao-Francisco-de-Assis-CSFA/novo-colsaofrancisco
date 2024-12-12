// /src/utils/db.js

import mysql from 'mysql2/promise';

// Configurações do banco de dados
const pool = mysql.createPool({
  host: 'localhost', // Substitua pelo host do seu banco de dados
  user: 'root', // Substitua pelo usuário do banco de dados
  password: 'root', // Substitua pela senha do banco de dados
  database: 'apadges', // Substitua pelo nome do banco de dados
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}

export default pool;
