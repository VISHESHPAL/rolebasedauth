import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import managerRouter from "./routes/manager.route.js";
import adminRouter from "./routes/admin.route.js";
import cors from 'cors'

dotenv.config();
connectDB();

const app = express(); 
app.use(express.json());
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173", // Frontend URL
  credentials: true // Allow cookies
}));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/manager", managerRouter);
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
