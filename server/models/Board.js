'use strict';

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BoardSchema   = new Schema({
    _id : Schema.Types.ObjectId,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    title: String,
    description: String,
    creator: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    createdate: { type: Date, default: Date.now },
    thumbnail: String,
    tags: { type: [String], index: true }
});

module.exports = mongoose.model('Board', BoardSchema);
