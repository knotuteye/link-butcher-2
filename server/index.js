"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 5000;
app.get('/', function (req, res) {
    res.send('URL Shortener Backend');
});
app.listen(3000, function () {
    console.log("URL Shortener live on port " + port + "!");
});
