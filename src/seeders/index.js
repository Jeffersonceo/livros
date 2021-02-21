const Livro = require("../models/Livros");

async function up() {

  Livro.cadastrar({
    name: "O Alquimista",
    image: "/imgs/1.jpg",
    autor: "Paulo Coelho",
    edicao: "1",
    editora: "Paralela",
  });
  Livro.cadastrar({
    name: "O Harry Potter e a pedra da fênix",
    image: "/imgs/2.jpg",
    autor: "J. K. Rowling",
    edicao: "1",
    editora: "Rocco",
  });
  Livro.cadastrar({
    name: "O Monge e o Executivo",
    image: "/imgs/3.jpg",
    autor: "James C. Hunter",
    edicao: "1",
    editora: "Sextante",
  });

  Livro.cadastrar({
    name: "O poder do hábito",
    image: "/imgs/4.jpg",
    autor: "James C. Hunter",
    edicao: "1",
    editora: "Objetiva",
  });


  Livro.usuarios({
    nome: "Vanessa",
    idade: "24",
    endereco: "Araruna - Paraiba - Brasil",
    email: "teste@gmail.com",
    telefone: "83999-9999",
  });
  
}

module.exports = { up };
