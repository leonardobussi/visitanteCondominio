const storage = require('localtoken');
const jwt = require('jsonwebtoken');

const keys = require('../../bin/keys');

exports.autorizarMorador = async (req, res, next) => {
    try {
        const token = await storage.getInLocal('moradorLogin');
        if(!token){
            return res.send('permissao negada');

        }
        return next();
    } catch (err) {
        next(err);
    }
}

exports.autorizarVisitante = async (req, res, next) => {
    try {
        const token = await storage.getInLocal('visitanteLogin');
        if(!token){
            return res.send('permissao negada');

        }
        return next();
    } catch (err) {
        next(err);
    }
}

exports.gerarToken = async (dados) => {
    return await jwt.sign(dados, keys.auth.secret);
}

exports.decodificar = async (token) => {
    const dados = await jwt.decode(token, keys.auth.secret);
    return dados;
} 