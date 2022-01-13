const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res) {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    },

    async detail(req, res) {
        const { _id } = req.params;
        const usuario = await Usuario.findOne({_id});
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
    },

    async delete(req, res) {
        const { _id } = req.params;
        const usuario = await Usuario.findByIdAndDelete({_id});
        res.json(usuario);
    },
}