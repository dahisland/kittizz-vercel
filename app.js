import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config({ path: ".env" });

// Database connection
connectDB();

// Declare Express module app
const app = express();

// Configuration for cors policy
const corsOptions = {
  origin: process.env.CLIENT_URL !== undefined ? process.env.CLIENT_URL : "*",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};

// Intercept all requests to apply cors configuration before all requests
app.use(cors(corsOptions));

// Intercept all requests : Express will consider and parse all requests with content-type : application/json
// to provide their body in the req object.
app.use(express.json());
// Intercept all requests : Express will parse cookies to provide them in the req object
app.use(cookieParser());
