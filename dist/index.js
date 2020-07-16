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
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var database_operations_1 = require("./src/db/database_operations");
var generateSlug_1 = require("./src/hash/generateSlug");
var app = express();
app.use(cors());
app.use(express.static('./client/dist'));
app.use(bodyParser.json());
/**SLUG ENDPOINTS */
app.post('/slugs/create', function (req, res) {
    var _this = this;
    var _a;
    var url = (_a = req.body.url) === null || _a === void 0 ? void 0 : _a.toString(); // Convert url to string
    // console.log(url)
    var slugTuple;
    generateSlug_1.optimizedSlugRoutine(url).then(function (result) {
        if (result) {
            res.json({ slug: result.slug, url: result.url });
        }
        else {
            var hook_1 = generateSlug_1.generateSlug(url);
            slugTuple = hook_1.next().value;
            // TODO: Make this recursive
            database_operations_1.URLAlreadyExists(slugTuple)
                .then(function (bool) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!bool) return [3 /*break*/, 2];
                            // console.log('Recursive Generation Entered')
                            slugTuple = hook_1.next().value;
                            return [4 /*yield*/, database_operations_1.URLAlreadyExists(slugTuple)];
                        case 1:
                            // console.log(slugTuple?.slug)
                            bool = _a.sent();
                            return [3 /*break*/, 0];
                        case 2: return [2 /*return*/];
                    }
                });
            }); })
                .then(function () {
                slugTuple
                    ? database_operations_1.insertLink(slugTuple)
                        .then(function () {
                        res.json({ slug: slugTuple === null || slugTuple === void 0 ? void 0 : slugTuple.slug, url: slugTuple === null || slugTuple === void 0 ? void 0 : slugTuple.url });
                    })
                        .catch(function (err) {
                        return res.json({ error: err || 'An error occurred. Retry' });
                    })
                    : res.json({ error: 'No URL Provided' });
            });
        }
    });
});
app.post('/slugs/all', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = res).json;
                    return [4 /*yield*/, database_operations_1.getAllTuples()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    });
});
/**REDIRECT ENDPOINT */
app.get('/:slug', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_operations_1.getURLOfExistingSlugTuple(req.params.slug)];
            case 1:
                url = _a.sent();
                url
                    ? res.redirect(url)
                    : res.send("<h1> This link doesn't exist ...yet </h1>");
                return [2 /*return*/];
        }
    });
}); });
app.get('/', function (req, res) {
    res.send('<h1>URL Shrink Backend</h1>');
});
app.listen(process.env.PORT || 5000, function () {
    console.log("URL Shortener live !");
});
