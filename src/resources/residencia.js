require('../Models/residencia');
require('../Models/morador');
const mongoose = require('mongoose');
const modelo =  mongoose.model('residencia');
const modelo2 =  mongoose.model('morador');

class Residencia  {
    static async criar(dados){

        const proj = await modelo2.findOne().sort({nome_morador: 1})

        console.log("a procura do id perfeito", proj)
        let {_id} = proj

        console.log("esse era para ser o id perfeito", _id)

        let { morador } = dados;
        morador = _id;
        dados.morador = morador;

        // /console.log(dados)
        
        return await new  modelo(dados).save();
    }
}

module.exports = Residencia;