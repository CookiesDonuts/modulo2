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
            console.log("que hay",user)
            res.redirect("/profile");
        })
        .catch(() => {
            res.redirect("/");
        });
}


router.get("/", isLoggedIn, (req, res) => {

    res.render("profile",{user: req.user})

   /* solo es una busqueda de todos los usuarios 
   Users.find()
        .populate("owner", "username")
        .then(user => {
            res.render("profile",{user})<--- mandar tu datos a tus vistas para utilizados 
            
        })
        */
});



module.exports = router;