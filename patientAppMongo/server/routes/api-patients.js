var express = require('express');
var fs = require('fs');
var datafile = 'server/data/patients.json';
var router = express.Router();

/* GET all patients and POST new patients */
router.route('/')
    .get(function(req, res) {
        var data = getPatientData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getPatientData();
        var nextID = getNextAvailableID(data);

        var newPatient = {
            patient_id: nextID,
            name: req.body.name,
            gender: req.body.gender,
            email: req.body.email,
            height: req.body.height,
            dob: req.body.dob,
            address: req.body.address 
        };

        data.push(newPatient);

        savePatientData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newPatient);
    });


/* GET, PUT and DELETE individual patients */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving patient id: ' + req.params.id);

        var data = getPatientData();

        var matchingPatients = data.filter(function(item) {
            return item.patient_id == req.params.id;
        });

        if(matchingPatients.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingPatients[0]);
        }
    })

    .delete(function(req, res) {

        var data = getPatientData();

        var pos = data.map(function(e) {
            return e.patient_id;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        savePatientData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getPatientData();

        var matchingPatients = data.filter(function(item) {
            return item.patient_id == req.params.id;
        });

        if(matchingPatients.length === 0) {
            res.sendStatus(404);
        } else {

            var patientToUpdate = matchingPatients[0];
            
            patientToUpdate.name = req.body.name;
            patientToUpdate.gender = req.body.gender;
            patientToUpdate.email = req.body.email;
            patientToUpdate.height = req.body.height;
            patientToUpdate.address = req.body.address;
            patientToUpdate.dob = req.body.dob;

            savePatientData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allPatients) {

    var maxID = 0;

    allPatients.forEach(function(element, index, array) {

        if(element.patient_id > maxID) {
            maxID = element.patient_id;
        }

    });

    return ++maxID;

}

function getPatientData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function savePatientData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
