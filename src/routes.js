const Controller = require('./controllers');
const express = require('express');
const routes = express.Router();

const auth = require('./middleware/auth');


require('./Models/residencia');

const mongoose = require('mongoose');
const modelo =  mongoose.model('residencia');

routes.get('/', Controller.getLogarVisitante);
routes.post('/', Controller.postLogarVisitante);

routes.get('/sign', Controller.getLogarMorador);
routes.post('/sign', Controller.postLogarMorador);


routes.get('/criar', auth.autorizarMorador, Controller.getCriarVisita);
routes.post('/criar', Controller.postCriarVisita);


routes.post('/morador/criar', Controller.postCriarMorador);
routes.get('/abrir', auth.autorizarVisitante, Controller.getAbrirPortaoVisita);

routes.post('/teste', async function(req, res){
    try {
        let resultado = req.body
        
        
        const dados = await new  modelo(resultado).save();

        const proj = await modelo.find().populate('morador')
        console.log({proj})

        return res.json({proj})
     } catch (err) {
         next(err);
     }
})




module.exports = routes;