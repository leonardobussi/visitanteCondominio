require('../Models/residencia');
require('../Models/morador');
const mongoose = require('mongoose');
const modelo =  mongoose.model('residencia');
const modelo2 =  mongoose.model('morador');

class Residencia  {
    static async criar(dados){

        let { numero, bloco } = dados;
        let casa = await modelo.findOne({ numero, bloco});
        
        const proj = await modelo2.findOne().sort({nome_morador: -1})
        let {_id} = proj
        let { morador } = dados;
        morador = _id;   
        dados.morador = morador;

        if(casa == null){
           
     
             console.log(dados)
             
             return await new  modelo(dados).save();
        }
        else{
            let updateCasa = await modelo.update({bloco: bloco, numero: numero}, {$push:{morador : _id}})
            console.log("casa ja existe no registro", updateCasa)
        }
    }
}

module.exports = Residencia;