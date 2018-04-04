/**
 * 首页
 * @author ydr.me
 * @created 2016-12-17 19:12
 */


'use strict';

var Application = require('blear.ui.application');
var Router = require('blear.classes.router');


// require('../utils/mvvm-static-methods');

var appConfigs = {
    el: '#app',
    platform: 'mobile'
};

var router = new Router();
var app = new Application(router, appConfigs);


router
    .match({
        meta: {
            '/': true,
            '/invest': true,
            '/life': true,
            '/mine': true
        }
    }, function (next) {
        next();
    })
    .get('/', function (next) {
        require.async('../pages/home/index.js', next);
    })
    // ========================
    // ========【 404 】========
    // ========================
    .get(function (next) {
        require.async('../public-pages/error/index.js', next);
    });

router.on('beforeLoad', function () {
    // spinner.show();
});

router.on('afterLoad', function () {
    // spinner.hide();
});

router.start();


