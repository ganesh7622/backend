const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "MarvelVerse Backend is Running 🚀"
    });
});

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");

        app.listen(5000, () => {
            console.log("🚀 Server running on port 5000");
        });
    })
    .catch((error) => {
        console.error("❌ MongoDB Connection Error:", error.message);
    });