import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import mongoose from "mongoose";
const router = express.Router();
import userSchema from "../models/userSchema.js";
import { auth } from "../verifyToken.js";
import { registerValidation, loginValidation } from "../validation.js";

dotenv.config();

const User = mongoose.model("User", userSchema);

// Add a user
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  //USER validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Checking user details are already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email already exists");

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  if (!name || !email || !password) {
    return res.status(400).send("Name, email, and password are required");
  }

  const user = new User({
    name,
    email,
    password: hashPassword,
    balance: 10000, // Set initial balance to 100
    fakeMoney: 0, // Set initial fake money to 0
  });

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  //USER validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return res.status(401).send("Invalid password");
    }

    //create and sign token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token);

    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get a user by ID
router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a user by ID
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
