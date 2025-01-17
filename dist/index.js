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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** Module Imports */
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
/** Local Imports */
var database_operations_1 = require("./src/db/database_operations");
var generateSlug_1 = __importDefault(require("./src/hash/generateSlug"));
var app = express();
/** Setting Up Middleware */
app.use(cors());
app.use(express.static('./client/dist'));
app.use(bodyParser.json());
/** API Endpoints */
/** Create Slug */
app.post('/slugs/create', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var url, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    url = req.body.url;
                    if (!url) return [3 /*break*/, 2];
                    _c = (_b = res).json;
                    return [4 /*yield*/, generateSlug_1.default(url)];
                case 1:
                    _a = _c.apply(_b, [_d.sent()]);
                    return [3 /*break*/, 3];
                case 2:
                    _a = res.sendStatus(400).send('No URL Provided');
                    _d.label = 3;
                case 3:
                    _a;
                    return [2 /*return*/];
            }
        });
    });
});
/** Fetch Recent Links */
app.get('/slugs/all', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _b = (_a = res).json;
                    return [4 /*yield*/, database_operations_1.getRecentTuples(req.query.id)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [2 /*return*/];
            }
        });
    });
});
/** Redirection */
app.get('/:slug', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tuple;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_operations_1.getTupleIfSlugAlreadyExists(req.params.slug)
                // If url was found in db, redirect else show error message
            ];
            case 1:
                tuple = _a.sent();
                // If url was found in db, redirect else show error message
                tuple
                    ? res.redirect(tuple.url)
                    : res.sendStatus(404).send("<h1> This link doesn't exist ...yet </h1>");
                return [2 /*return*/];
        }
    });
}); });
/** Listener */
app.listen(process.env.PORT || 5000, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log("URL Shortener live !");
            return [2 /*return*/];
        });
    });
});
