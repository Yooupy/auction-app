import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import usersRouter from "./routes/users.js";
import itemsRouter from "./routes/items.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const cloudinary = require("cloudinary").v2;

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Use the user-related routes
app.use("/users", usersRouter);

// Use the item-related routes
app.use("/items", itemsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Check if user is authenticated
app.use((req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, "secret123", (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
