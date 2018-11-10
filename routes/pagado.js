const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/pagado', (req, res, next) => {
    const {user} = req;
    res.render('pagado', {user});
});


module.exports = router;