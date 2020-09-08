require('../Models/residencia');

const mongoose = require('mongoose');
const modelo =  mongoose.model('residencia');

class Residencia  {
    static async criar(dados){
        let dado = dados;
        return await new  modelo(dado).save();
    }
    static async  validarRegistro(dados) {
        let { numero } = dados;
        let residencia = await modelo.findOne({numero});
        return residencia;
    }
    static async  validarEntrada(dados) {
        let { numero } = dados;
        let residencia = await modelo.findOne({numero});
        return residencia;
    }

}

module.exports = Residencia;