import { __awaiter, __generator } from "tslib";
import store from '../store';
var server = store.state.server;
export function getRecentLinks() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(server + "slugs/all", {
                        method: 'POST'
                    }).then(function (results) { return results.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
export function getNewLink(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(server + "slugs/create", {
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                        body: JSON.stringify({ url: url }),
                        method: 'POST'
                    }).then(function (results) { return results.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
