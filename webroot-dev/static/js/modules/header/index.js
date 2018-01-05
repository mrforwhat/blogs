/**
 * Created by forwhat on 2017/12/27.
 * 导航栏组件
 */

const selector = require('blear.core.selector');
const attribute = require('blear.core.attribute');

let array = require('blear.utils.array');
let headerEl = selector.query('#header')[0];
let template = require('./template.html');

let defaults = {
    el: '#header',
    menuList: [
        {
            name: '首页',
            active: true,
            url: ''
        },
        {
            name: '我的动态',
            active: false,
            url: '',
        },
        {
            name: '云笔记',
            active: false,
            url: ''
        }
    ]
};
let Header = function (options) {
    attribute.html(headerEl, template);
    let opt = Object.assign({}, defaults, options);

    new Vue({
        el: opt.el,
        data: {
            menuList: opt.menuList
        },
        methods: {
            onActive: function (menu, menuList) {
                if (menuList && menuList.length > 0) {
                    array.each(menuList, function (index, item) {
                        item.active = false;
                    });
                    menu.active = true;
                }
            }
        }
    });
};
require('./style.css', 'css|style');
module.exports = Header;