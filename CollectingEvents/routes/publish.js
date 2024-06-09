const express = require('express');
const router = express.Router();
const publisher = require('../lib/source/publishBatchedMessages');

/* Route to publish batched messages to Pub/Sub */
router.post('/batchedMessages', (req, res, next) => {
    publisher.publishBatchedMessages(req.body).then(response => {
        response && console.log(`Response:\t ${response}`);
    }).catch(next);
    res.sendStatus(200);
});

module.exports = router;
