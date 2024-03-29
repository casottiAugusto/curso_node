var express = require('express');
var consign =require('consign');
var app = express();
app.set('view engine', 'ejs');
app.set ('views','./app/views');

app.use(express.static("./app/public"))
app.use(express.urlencoded({extended: true}));

 
consign().include('app/routes')
.then('config/DbConnection.js')
.then('app/models')
.then('app/controllers')
.into(app);
module.exports = app;