const express            = require('express'),
      app                = express(),
      bodyParser         = require('body-parser'),
      mongoose           = require('mongoose'),
      patientsController = require('./server/controllers/patients-controller.js')

mongoose.connect('mongodb://localhost:27017/patients-express');

app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/js', express.static(__dirname + '/client/js')); 

app.get('/api/patients', patientsController.list);
app.post('/api/patients', patientsController.create);


app.listen(3010, function() {
    console.log('Listening on port 3010');
})