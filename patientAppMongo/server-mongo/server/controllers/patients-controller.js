const Patient = require('../models/patient');

module.exports.create = function (req, res) {
    const patient = new Patient(req.body);
    patient.save(function (err, result) {
        res.json(result);
    });
}

module.exports.list = function (req, res) {
    Patient.find({}, function (err, results) {
        res.json(results);
    });
}