const express               = require('express');
const router                = express.Router();
const User                  = require('../models/User')


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/auth/login");
}

function checkIfOwner(req, res, next){
    User.findById(req.params.id)
        .then(user => {
            if(user.owner.toString() === req.user._id.toString()){
                req.user = user;
                return next();
            }
            res.redirect("/profile");
        })
        .catch(() => {
            res.redirect("/profile");
        });
}



module.exports = router;