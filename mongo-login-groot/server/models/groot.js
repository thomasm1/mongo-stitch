const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const grootSchema = new Schema({
    
    isbn: string,
    author: string,
    title: string,
    name: string,
    type: string
});

module.exports = mongoose.model('groot', grootSchema, 'groots');