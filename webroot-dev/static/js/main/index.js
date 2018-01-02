'use strict';
const Vue = require('vue/dist/vue');
const Application = require('blear.ui.application');
const Router = require('blear.classes.router');
const router = new Router();
const app = new Application(router, {
    el: '#app',
    platform: 'desktop'
});
const Header = require('../modules/header/index');
// Vue.config.productionTip = false;
new Header();

router.match('/', function (next) {
     require.async('../pages/home/index', next);
}).otherwise(function () {
    return {};
});

app.on('beforeTransition', function () {
    console.info(1);
});

app.on('afterTransition', function () {
    console.info(2);
});

router.start();


// 现在，应用已经启动了！