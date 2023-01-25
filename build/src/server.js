"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const ErrorHandleMiddleware_1 = require("./errors/ErrorHandleMiddleware");
const app = (0, express_1.default)();
const PORT = 3000;
const errorMiddleware = new ErrorHandleMiddleware_1.ErrorHandlerMiddleware();
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(errorMiddleware.handle);
app.listen(PORT, () => console.log("Server is running..."));
