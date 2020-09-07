require('../models/visitante');

const mongoose = require('mongoose');
const modelo =  mongoose.model('visitante');

class Visitante  {
    static async  validarRegistro(dados) {
        let { cpf } = dados;
        let visitante = await modelo.findOne({cpf});
        return visitante;
    }
    static async  validarEntrada(dados) {
        let { cpf } = dados;
        let visitante = await modelo.findOne({cpf});
        return visitante;
    }
    static async  deletar(id) {
        return await modelo.findOneAndRemove(id);
    }
}

module.exports = Visitante;