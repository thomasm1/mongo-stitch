const express            = require('express');
const path               = require('path');
const favicon            = require('serve-favicon');
const app                = express();
const bodyParser         = require('body-parser');
const mongoose           = require('mongoose');
const blogsController = require('./server/controllers/blogs-controller.js');

mongoose.connect('mongodb://localhost:27017/blogs-express');

app.use(bodyParser());
app.use(bodyParser.json());

//upcoming routing
//app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

//app.use('/app', express.static(__dirname + '/client/app')); 
app.use('/app', express.static(path.join(__dirname, 'client/app')));
app.use(favicon(path.join(__dirname, 'client/favicon.ico'))); 

app.get('/api/blogs', blogsController.list);
app.post('/api/blogs', blogsController.create); 

app.set('port', process.env.PORT || 3010);
app.listen(3010, function() {
    console.log('Listening on port ' + app.get('port'));
});

module.exports = app;