const mongoose = require('mongoose');

const schema = mongoose.Schema;

const visita = new schema({
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('visita', visita);