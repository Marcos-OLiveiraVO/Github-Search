"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersRouter = void 0;
const express_1 = require("express");
const List_Users_From_Github_controller_1 = require("../modules/users/List-Users-From-Github-controller");
const listUsersRouter = (0, express_1.Router)();
exports.listUsersRouter = listUsersRouter;
const listUsersGithubController = new List_Users_From_Github_controller_1.ListUsersFromGithubController();
listUsersRouter.get("/", listUsersGithubController.handle);
