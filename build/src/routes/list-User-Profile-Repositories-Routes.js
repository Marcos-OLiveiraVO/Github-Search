"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileRepositoriesRoutes = void 0;
const express_1 = require("express");
const List_User_Profile_Repositories_Controller_1 = require("../modules/users/List-User-Profile-Repositories-Controller");
const userProfileRepositoriesRoutes = (0, express_1.Router)();
exports.userProfileRepositoriesRoutes = userProfileRepositoriesRoutes;
const listUserProfileRepositoriesController = new List_User_Profile_Repositories_Controller_1.ListUserProfileRepositoriesController();
userProfileRepositoriesRoutes.get("/:username/repos", listUserProfileRepositoriesController.handle);
