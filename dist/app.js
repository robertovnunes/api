"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./conf/server"));
const routes_1 = __importDefault(require("./routes"));
const server = new server_1.default();
server.start();
const app = server.getServer();
app.use(routes_1.default);
