import knex from 'knex';

const pool = knex({
  client: 'mysql2', // Ou outro cliente que você está usando
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 3306,
  },
});

export default pool;
