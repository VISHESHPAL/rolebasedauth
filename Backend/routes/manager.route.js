import express from "express";
import { managerDashboard } from "../controllers/managerController.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";

const managerRouter = express.Router();

// Only "Manager" can access
managerRouter.get("/dashboard", authenticate, authorizeRoles("Manager"), managerDashboard);

export default managerRouter;
