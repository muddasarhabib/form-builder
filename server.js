const express = require('express');
const app = express();
const passport = require("./auth/passport.js");
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./route/api');
app.use(cors());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api',route);


// Create server
const port = process.env.PORT || 8000;
app.listen(port,(err)=>{
   if(!err) console.log('running port',port);
   else  console.log(err);
});