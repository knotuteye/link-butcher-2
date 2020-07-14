"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hasher = require('sha-1');
/**
 * This function receives a string url and returns an 8 character slug
 * @param url The url to hash
 */
function default_1(url) {
    return hasher(url).slice(0, 8);
}
exports.default = default_1;
