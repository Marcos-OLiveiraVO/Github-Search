"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandlerMiddleware = void 0;
const AppError_1 = require("./AppError");
class ErrorHandlerMiddleware {
    handle(err, req, res, next) {
        if (err instanceof AppError_1.AppError) {
            return res.status(err.statusCode).json({
                message: err.message,
            });
        }
        return res.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
}
exports.ErrorHandlerMiddleware = ErrorHandlerMiddleware;
