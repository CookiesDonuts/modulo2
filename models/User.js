const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema ({
    username: {
        type: String,
        required: 'Necesitas un nombre de usuario',
        unique: true
    },
    email: {
        type: String,
        unique: 'Este email ya está registrado',
        required: true
    },
    name: String,
    lastname: String,
    password: String,
    address: String,
    avatar: String,
    phone: Number,
    activate: false

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

});


userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("User", userSchema);