const express               = require('express');
const router                = express.Router();
const Order                 = require('../models/Order');
const Dessert               = require('../models/Dessert');
const Topping               = require('../models/Topping');

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect("/auth/login");
}

router.get("/order", isLoggedIn, (req, res) => {
  Topping.find({})
    .then((toppings) => {
      res.render("order", {toppings});
    }) 
    .catch((err) => {
      console.log(err);
    });
});

router.post("/order", isLoggedIn, (req, res) => {
  
  const newDessert = new Dessert ({
    base: req.body.base,
    frosting: req.body.frosting,
    price: req.body.price,
    _toppings: req.body.toppings
  });

  newDessert.save()
    .then(() => {
      res.redirect("/order");
    })
    .catch((err) =>{
      console.log(err);
    });
});


router.get("/checkout", isLoggedIn, (req, res) => {
  const newOrder = new Order ({
    price: req.body.price,
    comments: req.body.comments,
    total: req.body.total,
    _user: req.body._user
  });

  newOrder.save()
    .then(() => {
      res.redirect("/checkout");
    })
    .catch((err) => {
      console.log(err);
    });
});








module.exports = router;