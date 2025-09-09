import express from "express";
import { signup, login, isLoggedIn, logout } from "../controllers/authController.js";
import { authenticate } from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/loggedIn", authenticate, isLoggedIn);
authRouter.post("/logout", authenticate, logout);
export default authRouter;
