import { Router } from "express";
import { ListUserProfileController } from "../modules/users/List-User-Profile-Controller";

const userProfileRepositoriesRoutes = Router();
const listUserProfileController = new ListUserProfileController();

userProfileRepositoriesRoutes.get(
  "/:username/repos",
  listUserProfileController.handle
);

export { userProfileRepositoriesRoutes };
