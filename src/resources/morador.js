require('../Models/morador');
require('../Models/residencia');

const mongoose = require('mongoose');
const cript = require('bcrypt');
const salt = 10;
const modelo =  mongoose.model('morador');
const modeloCasa =  mongoose.model('morador');

class Morador  {
    static async criar(dados){
        let { senha } = dados;
        const hash = await cript.hash(senha, salt);
        senha = hash;
        dados.senha = senha;

        //let {}
        console.log(dados)

        const {bloco, numero} = await new  modeloCasa(bloco, numero).save();
        return await new  modelo(dados).save();
    }
    static async  validarRegistro(dados) {
        let { email } = dados;
        let morador = await modelo.findOne({email});
        return morador;
    }
    static async  validarEntrada(dados) {
        let { email } = dados;
        let morador = await modelo.findOne({email});
        return morador;
    }
    static async  deletar(id) {
        return await modelo.findOneAndRemove(id);
    }
}

module.exports = Morador;