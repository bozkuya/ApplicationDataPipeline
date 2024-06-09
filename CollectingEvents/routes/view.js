const express = require('express');
const router = express.Router();
const bigQuery = require('../lib/source/bigQueryService');

/* Route to render daily active users data */
router.get('/dailyActiveUsers', (req, res, next) => {
    bigQuery.queryDailyActiveUsers().then(r => {
        r && res.render('dailyActiveUsers', { title: 'Daily Active Users', event_list: JSON.parse(r) });
    });
});

/* Route to render daily average durations data */
router.get('/dailyAverageDurations', (req, res, next) => {
    bigQuery.queryDailyAverageDurations().then(r => {
        r && res.render('dailyAverageDurations', { title: 'Daily Average Durations', event_list: JSON.parse(r) });
    });
});

/* Route to render total users data */
router.get('/totalUsers', (req, res, next) => {
    bigQuery.queryTotalUsers().then(r => {
        r && res.render('totalUsers', { title: 'Total Users', event_list: JSON.parse(r) });
    });
});

module.exports = router;
