const Blog = require('../models/blog');
 

module.exports.create = function (req, res) {
    const blog = new Blog(req.body);
    blog.save(function (err, result) {
        res.json(result);
    });
}

module.exports.list = function (req, res) {
    Blog.find({}, function (err, results) {
        res.json(results);
    });
}