const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dessertSchema = new Schema ({
    base: {
        type: String,
    enum: ['GALLETA', 'DONA', 'PANQUÉ'],
    default: 'GALLETA'
},
    frosting: {
    type: String,
        enum: ['NADA','VAINILLA','LIME','CHOCOLATE'],
        default: 'NADA'
},
    extras: {
        type: String,
        enum: ['NADA','M&M','NUEZ','CHISPAS', 'PRETZELS'],
        default: 'NADA'
    }
});

module.exports = mongoose.model("Dessert", dessertSchema);