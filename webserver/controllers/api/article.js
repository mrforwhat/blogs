/**
 * Created by Administrator on 2018/4/4/004.
 */
var Router = require('express').Router;
var mongoose = require('mongoose');
var plan = require('blear.utils.plan');
var array = require('blear.utils.array');
var router = new Router();
var Schema = mongoose.Schema;

// 文章表结构定义
var articleSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    content: String
});
// 文章模型
var article = mongoose.model('article', articleSchema);

// 博客表定义
var blogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    comment: [{
        userId: String,
        front: String,
        end: String,
        avatar: String,
        content: String,
        date: Date
    }],
    date: {type: Date, default: Date.now},
    meta: {
        votes: Number,
        favs: Number
    }
});

// 博客模型
var blog = mongoose.model('blog', blogSchema);
router.get('/list', function (req, res, next) {
    var query = req.query;
    var page = query.page || 1;
    var pageSize = query.pageSize || 10;
    var skipCount = (page - 1) * pageSize;
    var findBlogs = function (next) {
        blog.find({}).skip(skipCount).limit(pageSize).exec(next);
    };
    var countTotal = function (next) {
        blog.find({}).count(next);
    };
    plan
        .task(findBlogs)
        .task(countTotal)
        .parallel()
        .try(function (blogs, count) {
            res.api({list: blogs, total: count});
        })
        .catch(function (err) {
            console.error(err);
        })
});

module.exports = router;


