const fs = require('node:fs');
const path = require('node:path');
const { Client } = require('pg');

async function initializeDatabase() {
  const client = new Client({ connectionString: process.env.DATABASE_URL, options: '-c search_path=enterprisex,public' });
  try {
    await client.connect();
    const schema = fs.readFileSync(path.join(__dirname, '../../database/init.sql'), 'utf8');
    await client.query(schema);
    console.log('EnterpriseX database schema and demo data initialized.');
  } finally {
    await client.end();
  }
}

initializeDatabase().catch((error) => {
  console.error('Database initialization failed:', error.message);
  process.exitCode = 1;
});
