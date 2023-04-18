import express from "express";
const router = express.Router();
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

import Item from "../models/itemSchema.js";

// Get all items
router.get("/", async (req, res) => {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get an item by ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add an item
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.buffer, {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    });
    const item = new Item({
      name: req.body.name,
      description: req.body.description,
      startingBid: req.body.startingBid,
      imageUrl: result.secure_url,
    });
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update an item by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete an item by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).send();
    }
    res.send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a bid to an item
router.post("/:id/bids", async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).send();
    }
    if (req.body.bidAmount <= item.currentBid) {
      return res.status(400).send("Bid amount must be higher than current bid");
    }
    item.currentBid = req.body.bidAmount;
    item.bids.push({
      userId: req.body.userId,
      bidAmount: req.body.bidAmount,
      bidTime: new Date(),
    });
    await item.save();
    res.status(201).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
