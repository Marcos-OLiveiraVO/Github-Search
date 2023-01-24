import { Router } from "express";
import { ListUsersGithubController } from "../modules/users/List-Users-Github-controller";

const listUsersRouter = Router();
const listUsersGithubController = new ListUsersGithubController();

listUsersRouter.get("/", listUsersGithubController.handle);

export { listUsersRouter };
