const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
// const mongodb = require('mongodb');
const schedule = require('node-schedule');

const mongoConnect = require('./db').mongoConnect;

const router = require('./router');

app.set('view engine', 'ejs');
app.set('views', 'views');

// date when start the app
// let date = '* 6 * * 2';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// schedule.scheduleJob('35 * * * 2', function(){
// 	console.log('function called')
// 		let date = [
// 			'Sunday',
// 			'Monday',
// 			'Tuesday',
// 			'Wednesday',
// 			'Thursday',
// 			'Friday',
// 			'Saturday'
// 		]
// 		// if(date[new Date().getDay()] === 'Tuesday' ) {
// 			const tasks = require('./js/calendar')();
// 			let curr = new Date(); // get current date
// 			let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
// 			let last = first + 7; // last day is the first day + 6
// 			tasks.forEach((task) => {
// 				db.collection('events').insertOne({ 
// 					text: `${Object.keys(task)} : ${Object.values(task)}`,
// 					start_date: new Date(curr.setDate(last)).toUTCString(),
// 					end_date:	new Date(curr.setDate(last)).toUTCString(),
// 					color: "#DD8616"
// 				});
// 			})
// 		// }
//   });

app.use('/', router);
app.use((req, res, next) => {
	res.render('404');
})


mongoConnect(() => {
	app.listen(3000);
})