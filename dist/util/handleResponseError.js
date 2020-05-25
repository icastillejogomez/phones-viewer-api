"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(res, httpResponseCode, code, message) {
    res
        .status(httpResponseCode)
        .json({
        code: code,
        error: message,
        success: false,
    });
}
exports.default = default_1;
//# sourceMappingURL=handleResponseError.js.map