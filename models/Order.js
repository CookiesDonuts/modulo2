const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    price: Number,
    comments: String,
    total: Number,
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
});



module.exports = mongoose.model("Order", orderSchema);