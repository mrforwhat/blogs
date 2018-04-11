/**
 * Created by Administrator on 2018/4/4/004.
 */
var Router = require('express').Router;
var plan = require('blear.utils.plan');
var array = require('blear.utils.array');
var router = new Router();
var Blog = require('../model/blog');
var Comment = require('../model/comment');


router.get('/list', function (req, res, next) {
    var query = req.query;
    var page = query.page || 1;
    var pageSize = query.pageSize || 10;
    var skipCount = (page - 1) * pageSize;
    var findBlogs = function (next) {
        Blog.queryBlogs({
            skipCount: skipCount,
            pageSize: pageSize,
            userId: req.session.$user._id
        }, next);
    };
    var findComments = function (next) {
        Comment.queryComments({}, next)
    };

    plan
        .task(findBlogs)
        // .task(findComments)
        .parallel()
        .try(function (blogs) {
            console.log('---blogs---' + blogs);
            blogs = array.map(blogs, function (item) {
                return {
                    _id: item._id,
                    title: item.title,
                    author: item.author,
                    content: item.content,
                    comment: item.comment,
                    date: item.date,
                    meta: item.meta,
                    tag: item.tag,
                    count: item.comment.length,
                    show: false
                }
            });
            res.api({list: blogs});
        })
        .catch(function (err) {
            return next(err);
        })
});

router.post('/', function (req, res, next) {
    var body = req.body;
    var comment = new Comment({
        content: body.content,
        userId: req.session.$user._id,
        front: req.session.$user.nickname,
        end: '',
        date: new Date(),
        avatar: ""
    });
    comment.save(function (err, co) {
        if (err) {
            return next();
        }
        Blog.findById(body._id, function (err, blog) {
            if (err) {
                return next();
            }
            blog.comment.push(co._id);
            blog.save(function (err, ret) {
                if (err) {
                    return next();
                }
                res.api(ret);
            })
        });
    })

    // comment.content = body.content;
    // comment.userId = req.session.$user._id;
    // comment.front = req.session.$user.nickname;
    // comment.end = '';
    // comment.date = new Date();
    // comment.avatar = "";
    // comment.save(function (err, product) {
    //     if (err) {
    //         return next(err);
    //     }
    //     res.api(product);
    // })
});

module.exports = router;


