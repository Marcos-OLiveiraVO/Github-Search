import { Router } from "express";
import { userProfileRoutes } from "./user-Profile-Routes";
import { userProfileRepositoriesRoutes } from "./user-Profile-Repositories-Routes";
import { listUsersRouter } from "./list-Users-routes";

const router = Router();

router.use("/users", userProfileRoutes);
router.use("/users", userProfileRepositoriesRoutes);
router.use("/users", listUsersRouter);

export { router };
