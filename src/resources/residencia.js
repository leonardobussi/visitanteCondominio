require('../Models/residencia');
require('../Models/morador');
const mongoose = require('mongoose');
const modelo =  mongoose.model('residencia');
const modelo2 =  mongoose.model('morador');

class Residencia  {
    static async criar(dados){

        const proj = await modelo2.findOne().populate('morador')
        let {_id} = proj

        let { morador } = dados;
        morador = _id;
        dados.morador = morador;

        console.log(dados)
        return await new  modelo(dados).save();
    }
}

module.exports = Residencia;