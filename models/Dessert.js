const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dessertSchema = new Schema ({
    base: {
        type: String,
        enum: ['Galleta', 'Dona', 'Panqué'],
        default: 'Galleta'
},
    frosting: {
        type: String,
        enum: ['Sin frosting','Tradicional','Chocolate','Fresa'],
        default: 'Sin frosting'
},
    price: Number,
    // _order: {type: Schema.Types.ObjectId, ref: 'Order'},
    _toppings: [{type: Schema.Types.ObjectId, ref: 'Topping'}]
});

module.exports = mongoose.model("Dessert", dessertSchema);