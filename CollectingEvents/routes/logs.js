const express = require('express');
const router = express.Router();
const path = require('path');

/* Route to display logs from a JSON file */
router.get('/', (req, res, next) => {
    const fs = require("fs");
    try {
        // Read logs from a JSON file and render the logs page
        const logs = JSON.parse(fs.readFileSync(path.resolve(__dirname, path.join('..', 'public', 'events', 'dummyEvents.json')), 'utf-8'));
        res.render('logs', { title: 'Logs', event_list: logs });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
