/**
 * Created by Administrator on 2017/9/25.
 */

'use strict';

var ajax = require('blear.core.ajax');
var json = require('blear.utils.json');


/**
 * ajax
 * @param options
 * @param callback
 */
module.exports = function (options, callback) {
    if (typeof options.body === 'object') {
        options.body = json.stringify(options.body);
    }

    options.onSuccess = function (json, xhr) {
        if (json.code === 200) {
            return callback(null, json.result);
        }

        callback(new Error(json.message));
    };
    options.onError = callback;
    options.contentType = 'application/json; charset=utf-8';
    options.httpMethodOverride = true;
    ajax(options);
};


