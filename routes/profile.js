const express               = require('express');
const router                = express.Router();
const User                  = require('../models/User');


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/auth/login");
}

router.get("/profile", isLoggedIn, (req, res) => {

    res.render("profile",{user: req.user})

 
});

router.get("/profile/:id/edit",isLoggedIn, (req, res) => {
    const {user} = req;
    res.render("profile-update", {user});
});

router.post("/profile/:id/edit", isLoggedIn, (req, res) => {
    console.log(req.body);
    if(req.body.password !== req.body["password-confirm"]) return;
    User.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(()=>{
            res.redirect("/profile")
        })
        .catch((err) => {
            console.log(err)
        })
});


module.exports = router;