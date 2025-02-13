import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

// @route POST /api/users/register
// @desc Register a  new usdr
// @access Public

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Registration Logic
    res.send({ name, email, password });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});
