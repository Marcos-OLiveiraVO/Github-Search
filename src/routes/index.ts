import { Router } from "express";
import { userProfileRoutes } from "./List-User-Profile-Routes";
import { userProfileRepositoriesRoutes } from "./list-User-Profile-Repositories-Routes";
import { listUsersRouter } from "./list-Users-From-Github-routes";

const router = Router();

router.use("/api/users", userProfileRoutes);
router.use("/api/users", userProfileRepositoriesRoutes);
router.use("/api/users", listUsersRouter);

export { router };
