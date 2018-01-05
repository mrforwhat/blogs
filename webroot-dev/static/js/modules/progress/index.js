/**
 * Created by forwhat on 2017/12/29.
 * 进度条组件
 */

const selector = require('blear.core.selector');
const attribute = require('blear.core.attribute');

let array = require('blear.utils.array');
let template = require('./template.html');

let defaults = {
    el: '#progress',
    progressList: [
        {
            label: 'Html5',
            value: '80',
            color: '#00bfff'
        },
        {
            label: 'CSS',
            value: '75',
            color: '#00bfff'
        },
        {
            label: 'Jquery',
            value: '75',
            color: '#00bfff'
        },
        {
            label: 'Vue',
            value: '60',
            color: '#00bfff'
        },
        {
            label: 'Bootstrap',
            value: '60',
            color: '#00bfff'
        }
    ]
};
let Progress = function (options) {
    let opt = Object.assign({}, defaults, options);
    let progressEl = selector.query(opt.el)[0];

    attribute.html(progressEl, template);
    this.init = function () {
        let progressList = opt.progressList;
        let progressEl = selector.query(opt.el)[0];
        let progressValEl = selector.query('.progress-value', progressEl);
        array.each(progressList, function (index, item) {
            attribute.style(progressValEl[index], 'width', item.value + '%');
        });
    };
    new Vue({
        el: opt.el,
        data: {
            progressList: opt.progressList
        },
        methods: {}
    });
};
require('./style.css', 'css|style');
module.exports = Progress;