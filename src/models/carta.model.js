const mongoose = require('mongoose');

const CartaSchema = mongoose.Schema({
    name: String,
    content: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Carta', CartaSchema);
