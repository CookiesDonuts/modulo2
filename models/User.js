const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const userSchema = new Schema ({
    username: {
        type: String,
        required: 'Por favor escribe un nombre de usuario',
        unique: true
    },
    email: {
        type: String,
        unique: 'Tu correo debe de ser único',
        required: true
    },
    password: String,
    address: String,
    avatar: String

}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }
});


userSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("User", userSchema);