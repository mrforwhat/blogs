/**
 * Created by Administrator on 2018/4/10/010.
 */
'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var commentSchema = new Schema({
    userId: ObjectId,
    front: String,
    end: String,
    content: String,
    date: {type: Date, default: Date.now},
    avatar: String
});

commentSchema.static('queryComments', function (params, next) {
    return this.find({}).exec(next);
});

module.exports = mongoose.model('comment', commentSchema);
