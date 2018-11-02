const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/checkorder', (req, res, next) => {
  res.render('checkorder');
});

module.exports = router;
