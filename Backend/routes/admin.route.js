import express from "express";
import { adminDashboard } from "../controllers/adminController.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const adminRouter = express.Router();

// Only "Admin" can access
adminRouter.get("/dashboard", authenticate, authorizeRoles("Admin"), adminDashboard);

export default adminRouter;
