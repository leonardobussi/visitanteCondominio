const cript = require('bcrypt'); 
const storage = require('localtoken');

const moradorResource = require('./resources/morador');
//const visitaResource = require('./resources/visitante');
const auth = require('./middleware/auth');


// visitante login
exports.getLogarVisitante =  async (req, res, next) => {
    try {
        return res.render('visitante/index')
    } catch (err) {
        next(err);
    }
}

exports.postLogarVisitante =  async (req, res, next) => {
    try {
        // const resultado = await Adm.validarEntrada(req.body);
        // if(!resultado) {
        //     console.log('conta nao encontrada');
        //     return res.render('login/_index', {danger: "E-mail ou Senha inválido"});
            
        // }
        // if(!await cript.compare(req.body.senha, resultado.senha)) {
        //     console.log('senha do adm incorreto');
        //     return res.render('login/_index', {danger: "E-mail ou Senha inválido"});
            
        // }

        // const token = await auth.gerarToken( { resultado });
        // storage.setInLocal('login', token);
        // return res.redirect('painel');


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
        console.log('bem-vindo')

        
        return res.redirect('/criar')


    } catch (err) {
        next(err);
    }
}


exports.getDeslogarMorador = async (req, res, next) => {
    try {
       await storage.removeLocal('moradorLogin');
       console.log('deslogado');
       //return res.redirect('/adm/logar');  
    } catch (err) {
        next(err);
    }
}

exports.getDeslogarVisitante = async (req, res, next) => {
    try {
       await storage.removeLocal('visitanteLogin');
       console.log('deslogado');
       //return res.redirect('/adm/logar');  
    } catch (err) {
        next(err);
    }
}

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
    //    let resultado = await Adm.validarRegistro(req.body);
    //    if(!resultado){
    //        let adm = await Adm.criar(req.body);
    //        console.log(adm)
    //        return res.render('registerAdm/_index', {danger: " ", danger2: "registrado com sucesso"});
    //    } else {
    //     console.log('adm ja existe');
    //     return res.render('registerAdm/_index', {danger: "morador já existe",  danger2: " "});
    //    }
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
           console.log(morador)
           return res.json({morador})
       } else {
        console.log('adm ja existe');
        return res.send('morador ja existe')
       }
    } catch (err) {
        next(err);
    }
}