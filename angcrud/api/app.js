// Created By Pramod Kumar
// for db connection

const CONNECTION_URL = "mongodb://127.0.0.1:27017/hurixdb";

const mongoose = require('mongoose');
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const express = require('express')
const user = require('./routes/user.route'); //imports routes
const library = require('./routes/library.route'); //imports routes
const cors = require('cors');
const app = express()
const port = 3000
const bodyParser = require('body-parser');
app.use(cors()); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/users', user);
app.use('/api/library',library);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});