"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generateSlug = require("./generateSlug");
var hook = generateSlug.default('https://www.google.com');
var curr = hook.next();
while (!curr.done) {
    console.log(curr.value);
    curr = hook.next();
}
