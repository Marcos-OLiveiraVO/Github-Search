import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";
import { ErrorHandlerMiddleware } from "./errors/ErrorHandleMiddleware";

const app = express();
const PORT = 3000;

const errorMiddleware = new ErrorHandlerMiddleware();

app.use(express.json());
app.use(router);

app.use(errorMiddleware.handle);

app.listen(PORT, () => console.log("Server is running..."));
