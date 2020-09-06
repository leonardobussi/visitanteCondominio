const Controller = require('./controllers');
const express = require('express');
const routes = express.Router();

//const auth = require('../middleware/auth');


routes.get('/', Controller.getLogarVisitante);
routes.post('/', Controller.postLogarVisitante);

routes.get('/sign', Controller.getLogarMorador);
routes.post('/sign', Controller.postLogarMorador);


routes.get('/criar', Controller.getCriarVisita);
routes.post('/criar', Controller.postCriarVisita);



module.exports = routes;