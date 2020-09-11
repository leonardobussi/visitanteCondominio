const mongoose = require('mongoose');
require('../Models/residencia');
require('../Models/morador');
require('../Models/visitante');
const modelo =  mongoose.model('residencia');
const modelo2 =  mongoose.model('morador');
const modelo3 =  mongoose.model('visitante');

class Residencia  {
    static async criar(dados){

        //const proj = await modelo2.find().populate('morador')

        let { numero, bloco} = dados;
        let casa = await modelo.findOne({ numero, bloco});
        
        const proj = await modelo2.findOne().sort({updatedAt: -1})

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
    static async criarVisita(dados){



        let { numero, bloco} = dados;

        console.log('retorno da criarcao dos dados do viisitante', dados)
        let casa = await modelo.findOne({ numero, bloco});
        
        const project = await modelo3.findOne().sort({updatedAt: -1})

        if(project == null){
            const proj = await modelo3.findOne().sort({updatedAt: 1})
            console.log("deu ruim no proj", project)
        }
    
        let {_id} = project
        let { visitante } = dados;
        visitante = _id;   
        dados.visitante = visitante;

        if(casa == null){         
             //return await new  modelo(dados).save();
             console.log("imposivel registrar, o endereco está incorreto")
        }
        else{
            let updateCasa = await modelo.update({bloco: bloco, numero: numero}, {$push:{visitante : _id}})
            //console.log("casa ja existe no registro", updateCasa)

            console.log("dados", {casa})
        }
    }
}

module.exports = Residencia;