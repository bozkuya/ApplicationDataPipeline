const express = require('express');
const router = express.Router();
const bigQuery = require('../lib/source/bigQueryService');

/* Route to get daily active users from BigQuery */
router.get('/dailyActiveUsers', (req, res, next) => {
    bigQuery.queryDailyActiveUsers().then(r => {
        r && res.status(200).json(JSON.parse(r));
    });
});

/* Route to get daily average durations from BigQuery */
router.get('/dailyAverageDurations', (req, res, next) => {
    bigQuery.queryDailyAverageDurations().then(r => {
        r && res.status(200).json(JSON.parse(r));
    });
});

/* Route to get total users from BigQuery */
router.get('/totalUsers', (req, res, next) => {
    bigQuery.queryTotalUsers().then(r => {
        r && res.status(200).json(JSON.parse(r));
    });
});

module.exports = router;
