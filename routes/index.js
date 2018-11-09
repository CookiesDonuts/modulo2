const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  const {user} = req;
  res.render('index', {user});
});

router.get("/products", (req, res) => {
  const {user} = req;
  res.render("products", {user});
})

router.get("/contact", (req, res) => {
    const {user} = req;
    res.render("contact", {user});
})


module.exports = router;
