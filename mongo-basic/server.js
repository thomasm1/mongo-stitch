const express            = require('express'),
      app                = express(),
      bodyParser         = require('body-parser'),
      mongoose           = require('mongoose'),
      blogsController = require('./server/controllers/blogs-controller.js')

mongoose.connect('mongodb://localhost:27017/blogs-express');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/app', express.static(__dirname + '/client/app')); 

app.get('/api/blogs', blogsController.list);
app.post('/api/blogs', blogsController.create);

app.listen(3010, function() {
    console.log('Listening on port 3010');
})