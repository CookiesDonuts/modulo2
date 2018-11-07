const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    _dessert: [{type: Schema.Types.ObjectId, ref: 'Dessert'}],
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    total: Number
});



module.exports = mongoose.model("Order", orderSchema);