const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toppingSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('Topping', toppingSchema);