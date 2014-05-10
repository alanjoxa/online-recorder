var express = require('express');
var app = express();
var multer  = require('multer');

app.use(multer({
	dest: './uploads/',
	rename: function (fieldname, filename) {
		return filename.replace(/\W+/g, '-').toLowerCase() + "_" + Date.now()
	}
}));

app.get('/listen', function (req, res) {
    console.log("Reached");
});

app.post('/upload', function (req, res) {
    res.send(200,"Success");
});

app.use(express.static(__dirname + '/public'));

var http = require('http');
var port = 9999;

var server = http.createServer(function(req, res) {
    app.apply(null,arguments);console.log(__dirname);
}).listen(port, function(err) {
    if (err) return console.error(err);
    console.log(' Server running port: '+ port);
});

module.exports = app;

