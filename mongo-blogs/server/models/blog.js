const mongoose = require('mongoose');

module.exports = mongoose.model('Blog', {
    blogID: Number,
    title:  String, 
    date:   String,
    cat3:   String,
    post:   String,
    cite:   String 
});
 