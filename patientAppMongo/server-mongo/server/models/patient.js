const mongoose = require('mongoose');

module.exports = mongoose.model('Patient', {
    name: String,
    age: Number,
    gender: String,
    height: String,
    email: String,
    dob: Date,
    address: String,
    id: String

});