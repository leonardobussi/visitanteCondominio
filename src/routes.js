const Controller = require('./controllers');
const express = require('express');
const routes = express.Router();
const auth = require('./middleware/auth');


routes.get('/', Controller.getLogarVisitante);
routes.post('/', Controller.postLogarVisitante);

routes.get('/sign', Controller.getLogarMorador);
routes.post('/sign', Controller.postLogarMorador);


routes.get('/criar', auth.autorizarMorador, Controller.getCriarVisita);
routes.post('/criar', Controller.postCriarVisita);


routes.post('/morador/criar', Controller.postCriarMorador);
routes.get('/abrir', auth.autorizarVisitante, Controller.getAbrirPortaoVisita);



module.exports = routes;