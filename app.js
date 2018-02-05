var express = require('express');
var open = require ('open')
var app = express(); //create an instance it

/*eslint-disable no-console*/
var port = process.env.PORT || 5000


app.use(express.static('public'));
app.use(express.static('src/view'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('Hello boi');
});

app.listen(port, function(err) {
    if (err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
}); //callback

/*

var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/books', function (req, res) {
    res.send('hello books');
});

app.listen(port, function (err) {
    console.log('Running server on port ' + port);
});
*/