const getDb = require('../db').getDb;
const tasks = require('../public/js/calendar');

const Calendar = require('../model/Calendar');



exports.showPage = (req, res, next) => {
		res.render('calendar');
}

exports.getData = (req, res, next) => {
	const db = getDb();
	db.collection('events').find().toArray()
	.then((data) => {
		//set id property for all records
		for (var i = 0; i < data.length; i++)
		data[i].id = data[i]._id;

		//output response
		res.send(data);
	})
	.catch((err) => {
		throw err
	})
}

exports.getNewTasksByClick = (req, res, next) => {
	let calendar = new Calendar(tasks());
	calendar.newTask()
	.then((respone) => {
		res.redirect('/');
	})
	.catch((err) => {
		console.log(err)
	})
	
}