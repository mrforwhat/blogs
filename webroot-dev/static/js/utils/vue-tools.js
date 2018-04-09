/**
 * Created by Administrator on 2018/4/9/009.
 */
'use strict';

var date = require('blear.utils.date');

Vue.prototype.dateTimeFormat = function (d) {
    return date.format('YYYY-MM-DD HH:mm', d);
};


