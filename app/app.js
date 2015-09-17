var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;

//configure some server information: views and caching
app.set('pages', __dirname + '/pages');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/_resources', { maxAge: 2592000000 }));

//get the appropriate angular pages file when it is requested
app.get('/pages/:path', function(req, res){
	res.render('pages/' + req.params.path);
});

//route all other requests to the index page
app.get('*', function(req, res){
	res.render('index');
});

http.listen(port, function () {
    console.log('Listening on port ' + port);
});