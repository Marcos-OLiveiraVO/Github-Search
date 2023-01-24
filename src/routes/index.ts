import { Router } from "express";
import { userProfileRoutes } from "./user-Profile-Routes";

const router = Router();

router.use("/users", userProfileRoutes);

export { router };
