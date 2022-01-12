const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res) {
        const usuario = await Usuario.find();
        res.json(usuario);
    },

    async store(req, res) {
        const { nome, senha } = req.body;
        let dataCreate = {};

        dataCreate = {
            nome, senha
        };

        const usuario = await Usuario.create(dataCreate);
        res.json(usuario);
    }
}