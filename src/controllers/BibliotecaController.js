const Livro = require("../models/Livros");

const index = async (req, res) => {
  const livros = await Livro.readAll();
  res.render("livros/index.njk", { livros });
};

//LISTAR LIVROS index
const readAll = async (req, res) => {
  const livros = await Livro.readAll();
  res.json(livros);
};


//TELA CADASTAR
const cadastrar = async (req, res) => {
  res.render("livros/cadastro.njk");

};

//CADASTRAR LIVROS
const cadastrarLivros = async (req, res) => {
  const image = `/imgs/${req.file.originalname}`;
  const { name, autor, edicao, editora } = req.body;
  const id = await Livro.cadastrar({
    name,
    image,
    autor,
    edicao,
    editora,
  });
  //console.log(name, image );

  res.redirect("/livros/index");
};

//TELA CADASTAR
const usuarios = async (req, res) => {
 
  const users = await Livro.usuariosAll();
  res.render("livros/usuarios.njk", { users });
};

//CADASTRAR LIVROS
const cadastrarUsuarios = async (req, res) => {
 // const image = `/imgs/${req.file.originalname}`;
  const { nome, idade, endereco, email, telefone} = req.body;
  const id = await Livro.usuarios({
    nome, 
    idade, 
    endereco, 
    email, 
    telefone
  });
  console.log(nome, idade, endereco, email, telefone );

  res.redirect("/livros/usuarios");
};


//TELA BUSCAR
const buscar = async (req, res) => {
  var paramdeBuscar = req.query.query;
  const resultado = await Livro.BuscaAll(paramdeBuscar);
  res.render("livros/buscar.njk", { resultado, paramdeBuscar});
};



module.exports = { index, readAll, cadastrar, cadastrarLivros, usuarios, cadastrarUsuarios, buscar };
