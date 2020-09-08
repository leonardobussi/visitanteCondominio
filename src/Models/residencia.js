const mongoose = require('mongoose');

const schema = mongoose.Schema;

const residencia = new schema({
    morador: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'morador',
        required: false    
    }],
    visitante: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'visitante',
        required: false    
    }],
    bloco: {
        type: String,
        required: true,
        trim: true
    },
    numero: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('residencia', residencia);