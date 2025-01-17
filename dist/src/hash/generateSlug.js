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
exports.sliceTillUnique = exports.generateEncodedHash = void 0;
var hasher = require("sha-1");
var encoder = require("base64-url");
var database_operations_1 = require("../db/database_operations");
var SlugTuple_1 = require("./SlugTuple");
/**
 * This generator function receives a string url and
 * yields an 8 character slug sliced from the hashed input.
 */
function generateSlugTuple(url) {
    return __awaiter(this, void 0, void 0, function () {
        var oldTuple, slugParent, generator, slug, newTuple;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, database_operations_1.getTupleIfURLAlreadyExists(url)];
                case 1:
                    oldTuple = _a.sent();
                    if (oldTuple)
                        return [2 /*return*/, oldTuple
                            // Else Create a new SlugTuple
                        ];
                    slugParent = generateEncodedHash(url);
                    generator = sliceTillUnique(slugParent);
                    slug = '';
                    _a.label = 2;
                case 2:
                    slug = generator.next().value;
                    _a.label = 3;
                case 3: return [4 /*yield*/, database_operations_1.getTupleIfURLAlreadyExists(url)];
                case 4:
                    if (_a.sent()) return [3 /*break*/, 2];
                    _a.label = 5;
                case 5:
                    newTuple = new SlugTuple_1.SlugTuple(slug, url);
                    // Insert new SlugTuple into database
                    return [4 /*yield*/, database_operations_1.insertLink(newTuple).catch(function (err) {
                            // Error Handling
                            console.error('Critical: insertLink routine failed');
                            console.table(err);
                            newTuple['error'] =
                                'Internal Server Error. Database Error. Discard Tuple';
                        })
                        /**
                         * Send message to user when:
                         * i. insertion failed
                         * ii. bday paradox
                         */
                    ];
                case 6:
                    // Insert new SlugTuple into database
                    _a.sent();
                    /**
                     * Send message to user when:
                     * i. insertion failed
                     * ii. bday paradox
                     */
                    return [2 /*return*/, newTuple];
            }
        });
    });
}
exports.default = generateSlugTuple;
/**
 * This function takes a string url input and returns the
 * base64 encoding of its sha-1 hash.
 * @param url The url to hash and encode
 */
function generateEncodedHash(url) {
    var salt = "" + url + 'a very spicy salt';
    var hash = hasher(salt);
    var slugParent = encoder.encode(hash);
    return slugParent;
}
exports.generateEncodedHash = generateEncodedHash;
/**
 * This generator function takes a long string input and yields
 * 8-character segments from it, beginning from index 0.
 * @param slugParent The string to slice
 */
function sliceTillUnique(slugParent) {
    var i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i <= slugParent.length - 8)) return [3 /*break*/, 4];
                return [4 /*yield*/, slugParent.slice(i, i + 8)];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4:
                console.error('Birthday Paradox fulfilled');
                return [2 /*return*/, ''];
        }
    });
}
exports.sliceTillUnique = sliceTillUnique;
