// import express from 'express';
const express = require('express');
const router = express.Router();

/* Route to respond with a resource */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
// export default router;
