const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const grootSchema = new Schema({

    isbn: String,
    author: String,
    title: String,
    name: String,
    type: String
});

module.exports = mongoose.model('groot', grootSchema, 'groots');
