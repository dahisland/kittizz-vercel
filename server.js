import express from "express";
import dotenv from "dotenv";
import postRoutes from "./routes/post.routes.js";
import connectDB from "./config/db.js";
import cors from "cors";
import path from "path";
import { createServer } from "http";

dotenv.config({ path: ".env" });

const app = express();

// Database connection
connectDB();

// Configuration for cors policy
const corsOptions = {
  origin: process.env.CLIENT_URL !== undefined ? process.env.CLIENT_URL : "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

// Normalize port
const normalizePort = (value) => {
  const port = parseInt(value, 10);

  if (isNaN(port)) {
    return value;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT) || 5000;

// Create server
const server = createServer(app);

// Server address
const address = server.address();

// Indicate the port used to the Express module
app.set("port", port);

// Intercept all requests to apply cors configuration before all requests
app.use(cors(corsOptions));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// IMPORTANT FOR VERCEL - FOR PATH TO CLIENT INDEX.HTML
app.use(express.static(path.join(process.cwd(), "client", "build")));
// IMPORTANT FOR VERCEL - FOR PATH TO CLIENT INDEX.HTML
app.get("*", (_, res) => {
  res.sendFile(path.join(process.cwd(), "client", "build", "index.html"));
});

// Routes
app.use("/post", postRoutes);

// Process
server.on("listening", () => {
  const addressTypeof =
    typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + addressTypeof);
});

// Listen the request which will be sent to server by a port.
server.listen(port);
