const mongoose = require('mongoose');

const schema = mongoose.Schema;

const logDoMorador = new schema({
    nome_morador: {
        type: String,
        required: true,
        trim: true
    },
    data: {
        type: Date,
        required: false,
        default: Date.now
    }
});

module.exports = mongoose.model('logDoMorador', logDoMorador);