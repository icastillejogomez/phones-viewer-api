"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import the data
var mobiles_json_1 = __importDefault(require("./mobiles.json"));
function default_1(offset, limit) {
    if (offset === void 0) { offset = 0; }
    if (limit === void 0) { limit = 10; }
    // Creating new array data because we need to use splice
    var mobiles = Array.from(mobiles_json_1.default);
    return Promise.resolve(mobiles.splice(offset, limit));
}
exports.default = default_1;
//# sourceMappingURL=fetchMobiles.js.map