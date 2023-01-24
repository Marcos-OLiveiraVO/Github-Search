import { Router } from "express";
import { userProfileRoutes } from "./user-Profile-Routes";
import { userProfileRepositoriesRoutes } from "./user-Profile-Repositories-Routes";
import { listUsersRouter } from "./list-Users-routes";

const router = Router();

router.use("/api/users", userProfileRoutes);
router.use("/api/users", userProfileRepositoriesRoutes);
router.use("/api/users", listUsersRouter);

export { router };
