//const Morador = require('../controller/morador');
const express = require('express');
const router = express.Router();

//const auth = require('../middleware/auth');


//router.get('/', Morador.getLogar);

router.get('/', function(req, res){
    return res.send("salve doido")
  });


module.exports = router;