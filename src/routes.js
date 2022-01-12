const express = require('express');
const UsuarioController = require('./controller/UsuarioController');

const routes = express.Router();

routes.get('/', function(req, res){
    res.json({message: "Bem vindo ao Back End Mongo DB"});
});

routes.get('/usuario', UsuarioController.index);
routes.post('/usuario', UsuarioController.store);

module.exports = routes;