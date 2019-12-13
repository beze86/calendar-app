const getDb = require('../db').getDb;
const tasks = require('../js/calendar')();

exports.showPage = (req, res, next) => {
	const db = getDb();
    db.collection('events').find().toArray(function(err, data){
		//set id property for all records
		for (var i = 0; i < data.length; i++)
			data[i].id = data[i]._id;
		
		//output response
		res.render('calendar');
	});
}

exports.getNewTasks = (req, res, next) => {
	const db = getDb();
    console.log('function called')
		let date = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		]
			let curr = new Date(); // get current date
			let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
			let last = first + 7; // last day is the first day + 6
			tasks.forEach((task) => {
				db.collection('events').insertOne({ 
					text: `${Object.keys(task)} : ${Object.values(task)}`,
					start_date: new Date(curr.setDate(last)).toUTCString(),
					end_date:	new Date(curr.setDate(last)).toUTCString(),
					color: "#DD8616"
				});
			})
		res.send('updated');
}