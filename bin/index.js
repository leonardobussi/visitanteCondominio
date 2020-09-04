const express = require('express');
const bp = require('body-parser');
const morador_route = require('../src/routes/morador');
const app = express();


app.use(bp.json());
app.use(bp.urlencoded({extended: false}));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));



app.use('/', morador_route);


module.exports = app;