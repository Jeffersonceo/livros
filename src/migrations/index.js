const { conn } = require("../db");



async function up() {
  const sql = `
  CREATE TABLE IF NOT EXISTS livros (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    autor TEXT,
    edicao TEXT,
    editora TEXT
  )
`;
  const db = await conn();
  await db.run(sql);
}


async function down() {
  const sql = `DROP TABLE livros`;
  const db = await conn();
  await db.run(sql);
}

module.exports = { up, down };
