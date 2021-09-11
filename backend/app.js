var Error = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');
var cors = require('cors');

var reportsRouter = require('./routes/reports');

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({origin: 'http://localhost:3000'}));
app.use('/report', reportsRouter);

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err })
});


var port = process.env.PORT || '3001';
app.set('port', port);
var server = http.createServer(app);

server.listen(port);

module.exports = app;