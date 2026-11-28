const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL, options: '-c search_path=enterprisex,public' });
module.exports = { pool, query: (sql, params) => pool.query(sql, params) };
