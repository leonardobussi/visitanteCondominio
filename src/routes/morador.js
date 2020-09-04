//const Morador = require('../controller/morador');
const express = require('express');
const router = express.Router();

//const auth = require('../middleware/auth');


//router.get('/', Morador.getLogar);

router.get('/', function(req, res){
    return res.render('visitante/index')
});
router.get('/sign', function(req, res){
  return res.send("login morador")
});
router.get('/criar', function(req, res){
  return res.send("criar logs para visitantes")
});

module.exports = router;