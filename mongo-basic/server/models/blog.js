const mongoose = require('mongoose');

module.exports = mongoose.model('Blog', {
    name: String
});