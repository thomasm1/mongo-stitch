const mongoose = require('mongoose');
// const Media = require('./media');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: Number,
    email: String,
    password: String,
    fName: String,
    lName: String,
    memberSince: String,
    groupType: String,
    // media: Media
});
module.exports = mongoose.model('user', userSchema, 'users');
