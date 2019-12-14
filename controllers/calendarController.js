const getDb = require('../db').getDb;
const tasks = require('../public/js/calendar');

const Calendar = require('../model/Calendar');


// set date for automatic node scheduler
let date = '* 6 * * 2';

exports.showPage = (req, res, next) => {
		res.render('calendar');
}

exports.getData = (req, res, next) => {
	const db = getDb();
	db.collection('events').find().toArray(function(err, data){
		//set id property for all records
		for (var i = 0; i < data.length; i++)
			data[i].id = data[i]._id;
		
		//output response
		res.send(data);
	});
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