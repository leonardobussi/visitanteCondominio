const cript = require('bcrypt'); 
const storage = require('localtoken');

const moradorResource = require('./resources/morador');
const visitaResource = require('./resources/visitante');
const residenciaResource = require('./resources/residencia')
const auth = require('./middleware/auth');


// visitante login
exports.getLogarVisitante =  async (req, res, next) => {
    try {
        return res.render('visitante/index.ejs')
    } catch (err) {
        next(err);
    }
}

exports.postLogarVisitante =  async (req, res, next) => {
    try {
        const resultado = await visitaResource.validarRegistro(req.body);
        console.log(resultado)
        if(!resultado) {
            console.log('conta nao encontrada');
            return res.render('visitante/index')
            
        }
    
        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('visitanteLogin', token);
        return res.redirect('/abrir')


    } catch (err) {
        next(err);
    }
}

// morador login
exports.getLogarMorador =  async (req, res, next) => {
    try {
        return res.render('morador/sign/index')
    } catch (err) {
        next(err);
    }
}

exports.postLogarMorador =  async (req, res, next) => {
    try {
        const resultado = await moradorResource.validarEntrada(req.body);
        if(!resultado) {
            console.log('conta nao encontrada');
            return res.render('morador/sign/index.ejs')
            
        }
        if(!await cript.compare(req.body.senha, resultado.senha)) {
            console.log('senha do adm incorreto');
            return res.render('morador/sign/index.ejs')
            
        }

        const token = await auth.gerarToken( { resultado });
        storage.setInLocal('moradorLogin', token);  
        return res.redirect('/criar')


    } catch (err) {
        next(err);
    }
}


// exports.getDeslogarMorador = async (req, res, next) => {
//     try {
//        await storage.removeLocal('moradorLogin');
//        console.log('deslogado');
//        //return res.redirect('/adm/logar');  
//     } catch (err) {
//         next(err);
//     }
// }

// exports.getDeslogarVisitante = async (req, res, next) => {
//     try {
//        await storage.removeLocal('visitanteLogin');
//        console.log('deslogado');
//        return res.redirect('/');  
//     } catch (err) {
//         next(err);
//     }
// }

// criar funcionario
exports.getCriarVisita =  async (req, res, next) => {
    try {
        return res.render('morador/criarVisitas/index.ejs')
    } catch (err) {
        next(err);
    }
}

exports.postCriarVisita =  async (req, res, next) => {
    try {
       let resultado = await visitaResource.validarRegistro(req.body);
       if(!resultado){

           let visita = await visitaResource.criar(req.body);
           console.log(visita)
           console.log('visita registrada');
           return res.render('morador/criarVisitas/index.ejs')
       } else {
        console.log('visita já registrada');
        return res.render('morador/criarVisitas/index.ejs')
       }
    } catch (err) {
        next(err);
    }
}

// criar morador
exports.getCriarMorador =  async (req, res, next) => {
    try {
        return res.send('criar morador')
    } catch (err) {
        next(err);
    }
}

exports.postCriarMorador =  async (req, res, next) => {
    try {
       let resultado = await moradorResource.validarRegistro(req.body);
       if(!resultado){
           let morador = await moradorResource.criar(req.body);
           return res.json({morador})
       } else {
        console.log('adm ja existe');
        return res.send('morador ja existe')
       }
    } catch (err) {
        next(err);
    }
}

exports.getAbrirPortaoVisita =  async (req, res, next) => {
    try {
        await storage.removeLocal('visitanteLogin');
        return res.render('visitante/loading/index.ejs')
    } catch (err) {
        next(err);
    }
}