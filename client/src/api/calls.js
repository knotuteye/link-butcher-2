import { __awaiter, __generator } from "tslib";
export function getRecentLinks(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(endpoint).then(function (results) { return results.json(); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
