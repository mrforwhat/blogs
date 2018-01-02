/**
 * 安全相关中间件
 * @author ydr.me
 * @create 2016-01-13 15:07
 */


'use strict';

var configs = require('../../configs');



// 头信息添加 ua-compatible
exports.addUACompatibleHeader = function () {
    return function (req, res, next) {
        res.set('x-ua-compatible', 'IE=Edge,chrome=1');
        next();
    };
};


// 头信息添加 frame-options
exports.addFrameOptionsHeader = function () {
    return function (req, res, next) {
        res.set('x-frame-options', 'sameorigin');
        next();
    };
};
