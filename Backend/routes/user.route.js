import express from "express";
import { userDashboard } from "../controllers/userController.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const userRouter = express.Router();

// Only "User" can access
userRouter.get("/dashboard", authenticate, authorizeRoles("User"), userDashboard);

export default userRouter;
