const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    id: Number,
    uniqueId: String,
    character: String,
    location: String,
    thorinsCompany: String,
    quote: String,
});
module.exports = mongoose.model('media', mediaSchema, 'media');
