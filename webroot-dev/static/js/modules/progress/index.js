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
            color: ''
        }
    ]
};
let Progress = function (options) {
    let opt = Object.assign({}, defaults, options);
    let progressEl = selector.query(opt.el)[0];
    attribute.html(progressEl, template);
    return new Vue({
        el: opt.el,
        data: {
            progressList: opt.progressList
        },
        methods: {}
    });
};
require('./style.css', 'css|style');
module.exports = Progress;