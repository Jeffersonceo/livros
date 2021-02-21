const express = require('express');
const router = express.Router();
const BibliotecaController = require('../controllers/BibliotecaController');
const multer = require('multer');

const parser = multer( { 
  storage: multer.diskStorage( {
    destination: 'public/imgs',
    filename(req, file, callback) {
      callback(null, file.originalname);
    }
  }) 
})
//HOME
router.get('/', (req, res) => res.redirect('/livros/index'));
router.get('/livros', (req, res) => res.redirect('/livros/index'));
router.get('/livros/index', BibliotecaController.index);
//LIVROS
router.get('/livros/cadastrar', BibliotecaController.cadastrar);
router.post('/livros/cadastrar/action', parser.single("image"), BibliotecaController.cadastrarLivros);
//USUARIOS
router.get('/livros/usuarios', BibliotecaController.usuarios);
router.post('/livros/usuarios/action', BibliotecaController.cadastrarUsuarios);

//BUSCAR
router.get('/livros/buscar', BibliotecaController.buscar);



module.exports = router;
