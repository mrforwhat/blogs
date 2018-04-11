/**
 * Created by Administrator on 2018/4/10/010.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
// 博客表定义
var blogSchema = new Schema({
    title: String,
    author: String,
    content: String,
    tag: String,
    date: {type: Date, default: Date.now},
    meta: {
        votes: Number,
        favs: Number
    },
    comment: [{type: ObjectId, ref: 'comment'}]
});

// var Blog = mongoose.model('blog', blogSchema);
// blogSchema.method('queryBlogs',function(params,next){
//     return this.model('blog').find({}).skip(params.skipCount).limit(params.pageSize).exec(next);
// });

// 静态方法
blogSchema.static('queryBlogs', function (params, next) {
    return this.find({})
        .populate({path: 'comment'})
        .skip(params.skipCount).limit(params.pageSize).exec(next);
});

module.exports = mongoose.model('blog', blogSchema);