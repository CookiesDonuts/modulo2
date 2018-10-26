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
        enum: ['NADA','CLASSIC','CHOCOLATE','STRAWBERRY'],
        default: 'NADA'
},
    extras: {
        type: String,
        enum: ['NADA','M&Ms','NUEZ','CHISPAS DE CHOCOLATE', 'PRETZELS', 'PANDITAS', 'CHISPAS DE COLORES', 'OREO', 'TOCINO', 'FRUITY PEBBLES', 'BACON'],
        default: 'NADA'
    }
});

module.exports = mongoose.model("Dessert", dessertSchema);