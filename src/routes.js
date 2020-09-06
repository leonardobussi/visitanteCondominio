//const Morador = require('../controller/morador');
const express = require('express');
const routes = express.Router();

//const auth = require('../middleware/auth');


//router.get('/', Morador.getLogar);

routes.get('/', function(req, res){
    return res.render('visitante/index')
});
routes.get('/sign', function(req, res){
  return res.render('morador/sign/index')
});
routes.get('/criar', function(req, res){
  return res.send("criar logs para visitantes")
});

module.exports = routes;