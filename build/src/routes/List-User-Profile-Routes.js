"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileRoutes = void 0;
const express_1 = require("express");
const List_User_Profile_Controller_1 = require("../modules/users/List-User-Profile-Controller");
const userProfileRoutes = (0, express_1.Router)();
exports.userProfileRoutes = userProfileRoutes;
const userProfileDetailsController = new List_User_Profile_Controller_1.ListUserProfileController();
userProfileRoutes.get("/:username/details", userProfileDetailsController.handle);
