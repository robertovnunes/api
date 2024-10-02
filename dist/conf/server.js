"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.server = (0, express_1.default)();
        this.server.use(express_1.default.json());
    }
    start() {
        this.server.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    }
    getServer() {
        return this.server;
    }
}
exports.default = Server;
