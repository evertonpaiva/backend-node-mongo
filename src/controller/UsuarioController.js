const Usuario = require('../model/Usuario');

module.exports = {
    async index(req, res) {
        const usuario = await Usuario.find();
        res.json(usuario);
    }
}