"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTuples = exports.getURLOfExistingSlugTuple = exports.URLAlreadyExists = exports.getURLIfAlreadyExists = exports.insertLink = void 0;
var MongoDB = require("mongodb");
var credentials = require("./credentials.json");
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
function insertLink(tuple) {
    return new Promise(function (resolve, reject) {
        var payload = tuple;
        if (tuple)
            collection.insertOne(payload, function (err) {
                err ? reject(err) : resolve(console.log('Successful Insertion'));
            });
    });
}
exports.insertLink = insertLink;
function getURLIfAlreadyExists(url) {
    return new Promise(function (resolve, reject) {
        collection
            .findOne({ url: url })
            .then(function (result) {
            resolve(result || null);
        })
            .catch(function (err) { return reject(err); });
    });
}
exports.getURLIfAlreadyExists = getURLIfAlreadyExists;
function URLAlreadyExists(tuple) {
    return __awaiter(this, void 0, void 0, function () {
        var results;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, collection.findOne({ slug: tuple === null || tuple === void 0 ? void 0 : tuple.slug })];
                case 1:
                    results = _a.sent();
                    return [2 /*return*/, results ? true : false];
            }
        });
    });
}
exports.URLAlreadyExists = URLAlreadyExists;
function getURLOfExistingSlugTuple(slug) {
    return __awaiter(this, void 0, void 0, function () {
        var skyTuple;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, collection.findOne({ slug: slug })];
                case 1:
                    skyTuple = _a.sent();
                    return [2 /*return*/, (skyTuple === null || skyTuple === void 0 ? void 0 : skyTuple.url) || null];
            }
        });
    });
}
exports.getURLOfExistingSlugTuple = getURLOfExistingSlugTuple;
function getAllTuples() {
    return __awaiter(this, void 0, void 0, function () {
        var cursor, results, elem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, collection.find().limit(6).sort({ _id: -1 })];
                case 1:
                    cursor = _a.sent();
                    results = [];
                    _a.label = 2;
                case 2: return [4 /*yield*/, cursor.hasNext()];
                case 3:
                    if (!_a.sent()) return [3 /*break*/, 5];
                    return [4 /*yield*/, cursor.next()];
                case 4:
                    elem = _a.sent();
                    delete elem._id;
                    results.push(elem);
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, results];
            }
        });
    });
}
exports.getAllTuples = getAllTuples;
