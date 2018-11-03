const express               = require('express');
const router                = express.Router();
const User                  = require('../models/User');
const Order                 = require('../models/Order');



function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/auth/login");
}

router.get("/checkout", isLoggedIn, (req, res) => {

  res.render("checkout", {order: req.order})

  

 /* solo es una busqueda de todos los usuarios 
 Users.find()
      .populate("owner", "username")
      .then(user => {
          res.render("profile",{user})<--- mandar tu datos a tus vistas para utilizados 
          
      })
      */
});


module.exports = router;