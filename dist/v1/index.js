"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import external modules
var express_1 = __importDefault(require("express"));
// Import the routes
var phones_1 = __importDefault(require("./routes/phones"));
// Create new Express Router
var router = express_1.default.Router();
// Pass the router to the phones endpoint
phones_1.default(router);
// Export the express router
exports.default = router;
//# sourceMappingURL=index.js.map