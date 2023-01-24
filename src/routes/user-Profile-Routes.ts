import { Router } from "express";
import { ListUserProfileController } from "../modules/users/List-User-Profile-Controller";

const userProfileRoutes = Router();
const userProfileDetailsController = new ListUserProfileController();

userProfileRoutes.get(
  "/:username/details",
  userProfileDetailsController.handle
);

export { userProfileRoutes };
