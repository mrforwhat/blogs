/**
 * Created by Administrator on 2018/4/9/009.
 */
'use strict';

var api = require('../../utils/api');

exports.postComment = function (item, comment, callback) {
    api({
        url: '/api/article/',
        method: 'post',
        body: {
            content: comment,
            _id: item._id
        }
    }, callback);
};

exports.getArticleList = function(data){
    api({
        url: '/api/article/list',
        method: 'get',
        query: {}
    }, function (err, ret) {
        data.articles.list = ret.list;
    });
};