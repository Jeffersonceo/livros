const { conn } = require("../db");



async function up() {
  const sql = `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    idade TEXT,
    endereco TEXT,
    email TEXT,
    telefone TEXT
  )
`;
  const db = await conn();
  await db.run(sql);
}


async function down() {
  const sql = `DROP TABLE users`;
  const db = await conn();
  await db.run(sql);
}

module.exports = { up, down };
