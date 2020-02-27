const mongoose = require('mongoose');
import { Media } from './media';

const Schema = mongoose.Schema;
const userSchema = new Schema({
    id: Number,
    email: String,
    password: String,
    fName: String,
    lName: String,
    memberSince: String,
    groupType: String,
    media: Media
});
module.exports = mongoose.model('user', userSchema, 'users');