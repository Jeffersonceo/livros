const { conn: conexao } = require("../db");


//LIVROS####
//CADASTRO DE LIVROS
async function cadastrar(data) {
  const sql = `
  INSERT INTO
  livros (name, image, autor, edicao, editora)
  VALUES
    (?, ?, ?, ?, ?)
  `;

  const db = await conexao();
  const { name, image, autor, edicao, editora } = data;
  const { lastID } = await db.run(sql, [name, image, autor, edicao, editora]);
  return lastID;
}


//BUSCAR TODOS LIVROS
async function readAll() {
  const sql = `
  SELECT
    *
  FROM
  livros
`;
  const db = await conexao();
  const livros = await db.all(sql);
  return livros;
}





//CADASTRO DE USUARIOS
async function usuarios(data) {
  const sql = `
  INSERT INTO
  users (nome, idade, endereco, email, telefone )
  VALUES
    (?, ?, ?, ?, ?)
  `;
  const db = await conexao();
  const { nome, idade, endereco, email, telefone } = data;
  const { lastID } = await db.run(sql, [nome, idade, endereco, email, telefone]);
  return lastID;
}

//BUSCAR USUARIOS
async function usuariosAll() {
  const sql = `
  SELECT
    *
  FROM
  users
`;
  const db = await conexao();
  const usuarios = await db.all(sql);
  return usuarios;
}



//BUSCAR POR TITULO
async function BuscaAll(param) {
 //var paran = 'poder';
  //console.log(paran);
const sql = 'SELECT * FROM livros where name LIKE ?';
const db = await conexao();
const livros = await db.all(sql, '%'+param+'%');
return livros; 
}





module.exports = { cadastrar, readAll, usuarios, usuariosAll, BuscaAll };
