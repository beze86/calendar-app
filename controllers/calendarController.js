const CleanHouseTasks = require('../public/js/CleanHouseTasks');
const CalendarModel = require('../model/CalendarModel');



exports.showPage = (req, res, next) => {
		res.render('calendar');
}

exports.getData = (req, res, next) => {
	CalendarModel.getJsonData()
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		throw err
	})
}

exports.getNewTasksByClick = (req, res, next) => {
	let calendar = new CalendarModel(new CleanHouseTasks().cleaningTask());
	calendar.newTask()
	.then((response) => {
		res.redirect('/');
	})
	.catch((err) => {
		console.log(err)
	})
}