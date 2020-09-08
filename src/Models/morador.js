const mongoose = require('mongoose');

const schema = mongoose.Schema;

const morador = new schema({
    nome_morador: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    senha: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = mongoose.model('morador', morador);
