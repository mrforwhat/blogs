/**
 * Created by Administrator on 2017/10/12.
 */


'use strict';
// const Vue = require('vue/dist/vue');
const Controller = require('blear.classes.controller');
const Progress = require('../../modules/progress/index');

let ctrl = new Controller();
let data = ctrl.data = {
    intro: {
        job: 'Web Front-end Developer'
    }
};


ctrl.install(function (view) {
    view.style(require('./style.css'));
    view.html(require('./template.html'));
});

ctrl.install(function (view) {
    new Vue({
        el: '#container',
        data: {
            intro: data.intro
        }
    });
    let progress = new Progress('#progress');
    // progress.setValue(3);

});

ctrl.show(function (view) {
});

ctrl.hide(function (view) {

});


module.exports = ctrl.export();

