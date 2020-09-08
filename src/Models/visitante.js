const mongoose = require('mongoose');

const schema = mongoose.Schema;

const visitante = new schema({
    nome_visitante: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: Number,
        required: true,
    },
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('visitante', visitante);
