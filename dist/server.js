"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import external modules
var express_1 = __importDefault(require("express"));
// Import v1 API
var v1_1 = __importDefault(require("./v1"));
// Create an express app
var app = express_1.default();
// Mapping /api prefix with v1 API
app.use('/api', v1_1.default);
function run() {
    // Maybe call some config function that set sentry and others integrations??
    // Do some stuff
    // Run express
    app.listen(process.env.PORT || 8080, function () {
        console.log("Server listening on port " + (process.env.PORT || 8080));
    });
}
exports.default = run;
//# sourceMappingURL=server.js.map