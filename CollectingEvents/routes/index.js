const express = require('express');
const router = express.Router();

/* Route to render the home page */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
