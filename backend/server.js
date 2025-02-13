import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

// Connect
connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to VogueNest API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
