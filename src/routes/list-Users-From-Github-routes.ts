import { Router } from "express";
import { ListUsersFromGithubController } from "../modules/users/List-Users-From-Github-controller";

const listUsersRouter = Router();
const listUsersGithubController = new ListUsersFromGithubController();

listUsersRouter.get("/", listUsersGithubController.handle);

export { listUsersRouter };
