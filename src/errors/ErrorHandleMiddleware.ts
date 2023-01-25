import { AppError } from "./AppError";
import { Request, Response, NextFunction } from "express";

class ErrorHandlerMiddleware {
  handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof AppError) {
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

export { ErrorHandlerMiddleware };
