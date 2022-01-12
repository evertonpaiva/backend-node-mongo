const express = require('express');

const routes = express.Router();

routes.get('/', function(req, res){
    res.json({message: "Bem vindo ao Back End Mongo DB"});
});

module.exports = routes;