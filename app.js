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
let date = '* 6 * * 2';

// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'js')));
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


// app.get('/data', function(req, res){
// 	db.collection('events').find().toArray(function(err, data){
// 		//set id property for all records
// 		for (var i = 0; i < data.length; i++)
// 			data[i].id = data[i]._id;
		
// 		//output response
// 		res.send(data);
// 	});
// });


// app.post('/data', function(req, res){
// 	var data = req.body;
// 	var mode = data["!nativeeditor_status"];
// 	var sid = data.id;
// 	var tid = sid;

// 	delete data.id;
// 	delete data.gr_id;
// 	delete data["!nativeeditor_status"];


// 	function update_response(err, result){
// 		if (err)
// 			mode = "error";
// 		else if (mode == "inserted")
// 			tid = data._id;

// 		res.setHeader("Content-Type","application/json");
// 		res.send({action: mode, sid: sid, tid: tid});
// 	}

// 	if (mode == "updated")
// 		db.event.updateById( sid, data, update_response);
// 	else if (mode == "inserted")
// 		db.event.insert(data, update_response);
// 	else if (mode == "deleted")
// 		db.event.removeById( sid, update_response);
// 	else
// 		res.send("Not supported operation");
// });

app.use('/', router);


mongoConnect(() => {
	app.listen(3000);
})