const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
module.exports = { pool, query: (sql, params) => pool.query(sql, params) };
