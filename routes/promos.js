const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
    const {user} = req;
    res.render('promos', {user});
});


module.exports = router;
