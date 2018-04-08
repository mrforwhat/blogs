/**
 * Created by Administrator on 2018/4/4/004.
 */
var Router = require('express').Router;
var mongoose = require('mongoose');
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

    blog.find(function(err,blogs){
        if (err) {
            return next(err);
        }
        res.api({list: blogs});
    });

    // article.find({}, function (err, articleList) {
    //     if (err) {
    //         return next(err);
    //     }
    //     res.api({list: articleList});
    // });

    // res.api(articleList);
    // res.api({
    //     code: 200,
    //     list: [
    //         {
    //             id: 0,
    //             title: '码农的自我修养1',
    //             content: '辗转一流年，时光穿梭，岁月如水轻轻地蒸发，光景却是另一番。光阴积累回忆，时间循环生机，每一片旖旎的风光，孕育了每一片代表生机的翠绿，绿化了曾暗黄的校园。春天里的阳光轻暖如棉，细雨如针，轻轻落在浅黄的树叶上，深化每一点绿色，迎来四季的中央，妩媚了夏季艳阳天。',
    //             date: new Date().getTime(),
    //             count_total:22,
    //             count_concern:22,
    //             count_support:22,
    //             comment: [
    //                 {
    //                     id: 0,
    //                     userId: '1',
    //                     front: '转角遇到bug',
    //                     end: '',
    //                     avatar: '',
    //                     content: '这是一条评论',
    //                     date:new Date().getTime()
    //                 },
    //                 {
    //                     id: 1,
    //                     userId: '1',
    //                     front: '转角遇到bug',
    //                     end: '',
    //                     avatar: '',
    //                     content: '这是一条评论',
    //                     date:new Date().getTime()
    //                 }
    //             ]
    //         },
    //         {
    //             id: 1,
    //             title: '码农的自我修养2',
    //             content: '辗转一流年，时光穿梭，岁月如水轻轻地蒸发，光景却是另一番。光阴积累回忆，时间循环生机，每一片旖旎的风光，孕育了每一片代表生机的翠绿，绿化了曾暗黄的校园。春天里的阳光轻暖如棉，细雨如针，轻轻落在浅黄的树叶上，深化每一点绿色，迎来四季的中央，妩媚了夏季艳阳天。',
    //             date: new Date().getTime(),
    //             count_total:22,
    //             count_concern:22,
    //             count_support:22,
    //             comment: [
    //                 {
    //                     id: 2,
    //                     userId: '1',
    //                     front: '转角遇到bug',
    //                     end: '',
    //                     avatar: '',
    //                     content: '这是一条评论',
    //                     date:new Date().getTime()
    //                 },
    //                 {
    //                     id: 3,
    //                     userId: '1',
    //                     front: '转角遇到bug',
    //                     end: '',
    //                     avatar: '',
    //                     content: '这是一条评论',
    //                     date:new Date().getTime()
    //                 }
    //             ]
    //         }
    //     ]
    // });
});

module.exports = router;


