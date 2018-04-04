/**
 * Created by Administrator on 2018/4/2/002.
 */
'use strict';

var Controller = require('blear.classes.controller');

var ctrl = new Controller();

ctrl.title('欢迎来到iview');

ctrl.install(function (view) {
    view.style(require('./style.css'));
    view.html(require('./template.html'));
});

ctrl.install(function (view) {
    new Vue({
        el: '#home',
        data: {
            visible: false,
            value1: '0',
            columns1: [
                {
                    title: 'Name',
                    key: 'name'
                },
                {
                    title: 'Age',
                    key: 'age'
                },
                {
                    title: 'Address',
                    key: 'address'
                }
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03'
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01'
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02'
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04'
                }
            ],
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: '',
            modal1: false
        },
        methods: {
            show: function () {
                this.visible = true;
            },
            onOpen: function () {
                this.visible = true;
            },
            onOpen1: function () {
                this.$Modal.confirm({
                    title: '是否删除',
                    content: '一篇文章',
                    loading: true
                })
            },
            ok: function () {
                this.$Message.info('ok');
            },
            cancel: function () {
                this.$Message.info('cancel');
            }
        }
    })
});

ctrl.show(function (view) {

});

ctrl.hide(function (view) {

});

module.exports = ctrl.export();