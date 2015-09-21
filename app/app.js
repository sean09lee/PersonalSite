var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 8000;

//configure some server information: views and caching
app.set('view engine', 'html');
app.set('port', port);
app.set('/', __dirname + '/views');
app.use('/', express.static(__dirname + '/views'));

app.use(express.static(__dirname));

//route all other requests to the index page
app.get('*', function(req, res){
	res.render('/views/index.html');
});

http.listen(port, function () {
    console.log('Listening on port ' + port);
});