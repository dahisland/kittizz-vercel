import express from "express";
import {
  createKitty,
  getAllKitties,
  getOneKitty,
  updateKitty,
  deleteKitty,
  likeKitty,
  unlikeKitty,
} from "../controllers/post.controller.js";

const router = express.Router();

// Get all data
router.get("/", getAllKitties);

// Get one data by id
router.get("/:id", getOneKitty);

// Create new data
router.post("/", createKitty);

// Update data by id
router.put("/:id", updateKitty);

// Delete data by id
router.delete("/:id", deleteKitty);

// Update likes
router.patch("/like/:id", likeKitty);
router.patch("/unlike/:id", unlikeKitty);

export default router;
