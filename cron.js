const cron = require('node-cron');

const CleanHouseTasks = require('./public/js/CleanHouseTasks');
const CalendarModel = require('./model/CalendarModel');

// date when start the app
let date = '00 07 * * Monday';

cron.schedule(date, () => {
    let calendar = new CalendarModel(new CleanHouseTasks().cleaningTask());
	calendar.newTask();
    console.log('task created')
});