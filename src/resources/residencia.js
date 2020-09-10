require('../Models/residencia');
require('../Models/morador');
const mongoose = require('mongoose');
const modelo =  mongoose.model('residencia');
const modelo2 =  mongoose.model('morador');

class Residencia  {
    static async criar(dados){

        let { numero, bloco } = dados;
        let casa = await modelo.findOne({ numero, bloco});
        
        const proj = await modelo2.findOne().sort({updatedAt: -1})
        console.log(proj)

        if(proj == null){
            const proj = await modelo2.findOne().sort({updatedAt: 1})
            console.log("deu ruim no proj", proj)
        }
    
        let {_id} = proj
        let { morador } = dados;
        morador = _id;   
        dados.morador = morador;

        if(casa == null){         
             return await new  modelo(dados).save();
        }
        else{
            let updateCasa = await modelo.update({bloco: bloco, numero: numero}, {$push:{morador : _id}})
            // console.log("casa ja existe no registro", updateCasa)

            console.log("dados", {casa})
        }
    }
}

module.exports = Residencia;