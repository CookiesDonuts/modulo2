const express               = require('express');
const router                = express.Router();
const User                  = require('../models/User');


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect("/auth/login");
}

// function checkIfOwner(req, res, next){
//     User.findById(req.params.id)
//         .then(user => {
//             if(user.owner.toString() === req.user._id.toString()){
//                 req.user = user;
//                 return next();
//             }
//             res.redirect("/profile/:id/edit");
//         })
//         .catch(() => {
//             res.redirect("/");
//         });
// }


router.get("/profile", isLoggedIn, (req, res) => {

    res.render("profile",{user: req.user})

   /* solo es una busqueda de todos los usuarios 
   Users.find()
        .populate("owner", "username")
        .then(user => {
            res.render("profile",{user})<--- mandar tu datos a tus vistas para utilizados 
            
        })
        */
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