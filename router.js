const express = require('express');
const router = express.Router();

const calendarController = require('./controllers/calendarController.js');

router.get('/', calendarController.showPage);
router.get('/data',calendarController.getData);
router.get('/init', calendarController.getNewTasksByClick);


module.exports = router;