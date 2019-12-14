const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const schedule = require('node-schedule');

const mongoConnect = require('./db').mongoConnect;
const Calendar = require('./model/Calendar');
const tasks = require('./public/js/calendar');

const router = require('./router');

app.set('view engine', 'ejs');
app.set('views', 'views');

// date when start the app
let date = '59 7 * * 1';

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// load all other pages
app.use('/', router);

// start node-schedule automatic task
schedule.scheduleJob(date, () => {
	console.log('task created')
	let calendar = new Calendar(tasks());
	calendar.newTask()	
});

// display error page
app.use((req, res, next) => {
	res.render('404');
})


mongoConnect(() => {
	let port = process.env.PORT;
	if (port == null || port == "") {
  		port = 8000;
	}
	app.listen(3000);
})