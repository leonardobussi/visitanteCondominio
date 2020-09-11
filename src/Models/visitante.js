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
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('visitante', visitante);
