import { Router } from "express";
import { ListUserProfileController } from "../modules/users/List-User-Profile-Controller";

const userProfileRoutes = Router();
const userProfileDetailsController = new ListUserProfileController();

userProfileRoutes.get("/:user", userProfileDetailsController.handle);

export { userProfileRoutes };
