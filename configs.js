/**
 * 配置文件
 * @author ydr.me
 * @create 2016年01月13日14:30:30
 */


'use strict';

var path = require('path');
var pkg = require('./package.json');

var env = getEnv();
var webroot = env === 'local' ? 'dev' : 'pro';
var root = __dirname;
var port = 3010;

module.exports = {
    port: port,
    env: env,
    pkg: pkg,
    root: root,
    webroot: path.join(root, './webroot-' + webroot),
    cookie: {
        secret: 'express-template',
        // 30d
        expires: 30 * 24 * 60 * 60 * 1000,
        sessionName: 's' + port
    },
    logLevel: {
        local: ['log', 'info', 'warn', 'error'],
        dev: ['log', 'info', 'warn', 'error'],
        test: ['log', 'info', 'warn', 'error'],
        pro: ['warn', 'error']
    }[env],
    mongodb: {
        local: 'mongodb://localhost:27017/blogdb',
        dev: 'mongodb://localhost:27017/blogdb',
        test: 'mongodb://localhost:27017/blogdb',
        pro: 'mongodb://localhost:27017/blogdb'
    }[env],
    api: 'http://api.com',
    fundebug: {
        apiUrl: 'https://og6593g2z.qnssl.com/fundebug.0.3.3.min.js',
        apiKey: 'API_KEY',
        releaseStage: {
            local: 'development',
            dev: 'development',
            test: 'test',
            pro: 'production'
        }[env]
    }
};


/**
 * 获取当前环境变量
 * @returns {string}
 */
function getEnv() {
    var LOCAL_ENV = 'local';
    var DEVELOPMENT_ENV = 'dev';
    var PRODUCTION_ENV = 'pro';
    var TEST_ENV = 'test';
    //noinspection JSUnresolvedVariable
    var env = process.env.NODE_ENV || process.env.ENVIRONMENT || LOCAL_ENV;

    if (env.indexOf(DEVELOPMENT_ENV) > -1) {
        env = DEVELOPMENT_ENV;
    } else if (env.indexOf(PRODUCTION_ENV) > -1) {
        env = PRODUCTION_ENV;
    } else if (env.indexOf(TEST_ENV) > -1) {
        env = TEST_ENV;
    } else {
        env = LOCAL_ENV;
    }

    return env;
}

