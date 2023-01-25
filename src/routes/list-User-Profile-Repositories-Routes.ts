import { Router } from "express";
import { ListUserProfileRepositoriesController } from "../modules/users/List-User-Profile-Repositories-Controller";

const userProfileRepositoriesRoutes = Router();

const listUserProfileRepositoriesController =
  new ListUserProfileRepositoriesController();

userProfileRepositoriesRoutes.get(
  "/:username/repos",
  listUserProfileRepositoriesController.handle
);

export { userProfileRepositoriesRoutes };
