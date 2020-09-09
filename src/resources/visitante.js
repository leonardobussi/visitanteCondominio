require('../Models/visitante');
require('../Models/residencia');

const mongoose = require('mongoose');
const modelo =  mongoose.model('visitante');

class visitante  {
    static async criar(dados){
        console.log(dados)
        return await new  modelo(dados).save();
    }
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
}

module.exports = visitante;