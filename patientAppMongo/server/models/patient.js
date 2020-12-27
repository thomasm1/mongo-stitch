const mongoose = require('mongoose');

module.exports = mongoose.model('Patient', {
    name: String
});