/**
 * 主控制器
 * @author ydr.me
 * @create 2016-01-13 14:45
 */


'use strict';

var Router = require('express').Router;
var mongoose = require('mongoose');
var configs = require('../../configs');
var pkg = require('../../package.json');
var Schema = mongoose.Schema;
var router = new Router();
var LOCAL_ENV = 'local';

// 首页
router.get('/', function (req, res, next) {
    req.session.$user = {
        _id: "5acb123455a3b518abcbc221",
        nickname: "北纬30°の伪装",
        avatar: "",
        age: 26,
        sex: 0
    };
    res.render('index.html', {
        app: 'blog'
    });
});

module.exports = router;
