"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MongoDB = require("mongodb");
var credentials = require("../db/credentials.json");
var uri = "mongodb+srv://" + credentials.name + ":" + credentials.password + "@" + credentials.server + "/" + credentials.database + "?retryWrites=true&w=majority";
var DB;
var collection;
MongoDB.MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function (client) {
    console.log('Connected to DB');
    DB = client.db(credentials.database);
    collection = DB.collection('urlMap');
})
    .catch(function (error) { return console.error(error); });
