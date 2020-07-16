"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateSlug_1 = require("../src/hash/generateSlug");
var SlugTuple_1 = require("../src/hash/SlugTuple");
test('should return slug', function () {
    var obj = new SlugTuple_1.SlugTuple('ZDNkNjJk', 'https://www.google.com');
    expect(JSON.stringify(generateSlug_1.generateSlug('https://www.google.com').next().value)).toBe(JSON.stringify(obj));
});
// function checkAlternativeSlug(index: number): string {
//   const hook: Generator = generateSlug('https://www.google.com')
//   for (let i = 0; i < index; i++) {
//     hook.next()
//   }
//   let str = hook.next().value
//   return str
// }
// test('should return nth slug', () => {
//   expect(checkAlternativeSlug(5)).toBe('jJkYzEzM')
// })
