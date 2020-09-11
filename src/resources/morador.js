require('../Models/morador');


const mongoose = require('mongoose');
const cript = require('bcrypt');
const salt = 10;
const modelo =  mongoose.model('morador');


class Morador  {
    static async criar(dados){
        let { senha } = dados;
        const hash = await cript.hash(senha, salt);
        senha = hash;
        dados.senha = senha;

        await new  modelo(dados).save();
        return;
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