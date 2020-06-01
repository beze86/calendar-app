const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const mongoConnect = require('./db').mongoConnect;

const router = require('./router');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// load all other pages
app.use('/', router);

// display error page
app.use((req, res, next) => {
	res.render('404');
})


mongoConnect(() => {
	let port = process.env.PORT;
	if (port == null || port == "") {
  		port = 8000;
	}
	app.listen(port);
})