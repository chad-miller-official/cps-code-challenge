var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');


var quotesRouter = require('./routes/quotes');

var app = express();
app.use(cors());
app.disable('etag');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/quotes', quotesRouter);

module.exports = app;
