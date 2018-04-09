/**
 * Created by Administrator on 2018/4/2/002.
 */
'use strict';

var Controller = require('blear.classes.controller');
var api = require('../../utils/api');
var ctrl = new Controller();
var data = ctrl.data = {
    thanks: ['博主谢谢你啦,送你❤', '你是最帅滴', '最美不过妳'],
    articles: {
        list: [],
        total: 0
    }

};
ctrl.title('欢迎来到iview');

ctrl.install(function (view) {
    view.style(require('./style.css'));
    view.html(require('./template.html'));
});

ctrl.install(function (view) {
    new Vue({
        el: '#home',
        data: data,
        methods: {
            onSupport: function () {
                var randomIndex = Math.ceil(parseInt(Math.random() * 10) / 3);
                this.$Message.success(this.thanks[randomIndex]);
            },
            onConcern: function () {
                this.$Message.success('感谢您的关注,❤')
            }
        }
    })
});

ctrl.show(function (view) {
    api({
        url: '/api/article/list',
        method: 'get',
        query: {}
    }, function (err, ret) {
        data.articles.list = ret.list;
        data.articles.total = ret.total;
    });
});

ctrl.hide(function (view) {

});
module.exports = ctrl.export();