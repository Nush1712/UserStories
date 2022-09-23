//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const expressValidator = require('express-validator');
const ejs = require('ejs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoutes = require('./routes/post');
const logger = require('simple-node-logger').createSimpleLogger('project.log');



const app = express();
dotenv.config();

//middleware
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.use(expressValidator());



//Database
mongoose.connect(process.env.MONGO_DB);



app.use("/", postRoutes);

app.use("/register", postRoutes);

app.use("/login", postRoutes);




const port = process.env.PORT;
app.listen(port, function() {
  logger.info(`Server has started successfully at port number: ${port}`);

});
