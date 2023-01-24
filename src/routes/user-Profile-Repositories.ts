import { Router } from "express";
import { ListUserProfileController } from "../modules/users/List-User-Profile-Controller";

const userProfileRepositoriesRoutes = Router();
const listUserProfileController = new ListUserProfileController();

userProfileRepositoriesRoutes.get(
  "/:user/repos",
  listUserProfileController.handle
);

export { userProfileRepositoriesRoutes };
