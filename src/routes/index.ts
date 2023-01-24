import { Router } from "express";
import { userProfileRoutes } from "./user-Profile-Routes";
import { userProfileRepositoriesRoutes } from "./user-Profile-Repositories";

const router = Router();

router.use("/users", userProfileRoutes);
router.use("/users", userProfileRepositoriesRoutes);

export { router };