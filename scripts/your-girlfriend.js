'use strict';

var cache = {};

exports.get = function (key) {
    var cachedItem = cache[key];
    if(!cachedItem) return null;

    if(cachedItem.expiration && cachedItem.expiration < new Date()) {
        cache[key] = null;
        return null;
    }

    return cachedItem.result;
};

exports.set = function (key, val, expiration) {
    var cachedItem = {
        result: val,
        expiration: expiration
    };
    cache[key] = cachedItem;
};
