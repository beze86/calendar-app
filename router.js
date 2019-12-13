const express = require('express');
const router = express.Router();

const calendarController = require('./controllers/calendarController.js');

router.get('/', calendarController.showPage);
router.get('/init', calendarController.getNewTasks);


module.exports = router;