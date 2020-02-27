const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mediaSchema = new Schema({
    id: number,
    uniqueId: string,
    character: string,
    location: string,
    thorinsCompany: string,
    quote: string,

});
module.exports = mongoose.model('Media', mediaSchema, 'media');