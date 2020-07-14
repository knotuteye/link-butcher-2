"use strict";
var generateSlug = require('../src/generateSlug').default;
test('should return slug', function () {
    expect(generateSlug('https://google.com').next().value).toBe('72fe95c5');
});
test('should return slug', function () {
    expect(generateSlug('https://www.google.com/doodles').next().value).toBe('bb14ca9d');
});
test('should return slug', function () {
    expect(generateSlug('pbid.io').next().value).toBe('79cf4af9');
});
