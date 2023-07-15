import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.routes.js";
import connectDB from "./config/db.js";

dotenv.config({ path: ".env" });

const app = express();
const port = process.env.PORT;

// Database connection
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/post", postRoutes);

// Launch server
app.listen(port, () => console.log("server is on port : " + port));
