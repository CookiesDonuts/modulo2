const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    dessert: String,
    quantity: Number,
    price: Number,
    comments: String,
    total: Number

});

module.exports = mongoose.model("Orders", orderSchema);