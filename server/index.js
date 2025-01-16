import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./routes/User.js";
import path from "path";
import { verifyToken } from "./middleware/verifyToken.js";

dotenv.config();
console.log("JWT_SECRET:", process.env.JWT_SECRET);

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true })); // Fixed the typo "extented" → "extended"

// Routes
app.use("/api/user", UserRoutes);

// Tutorials Data
const tutorials = [
  {
    id: 1,
    title: "Beginner Workout Plans",
    description:
      "Learn how to start your fitness journey with easy-to-follow beginner workout plans.",
    link: "https://youtu.be/t5Put_6aziE?si=hJzOjaSGNMBDwgGg",
    image: "./src/pages/nidhi1.jpg",
  },
  {
    id: 2,
    title: "Meal Planning for Beginners",
    description:
      "Understand how to create a balanced diet that aligns with your fitness goals.",
    link: "https://youtu.be/DhAfxWYz4Zk?si=OY8dM3sbhPai3JSns",
  },
  {
    id: 3,
    title: "Proper Form for Squats",
    description:
      "Step-by-step guide on how to perform squats correctly to avoid injuries.",
    link: "https://youtu.be/gcNh17Ckjgg?si=5kujodelFY2-SV7H",
  },
  {
    id: 4,
    title: "5-Minute Stretching Routine",
    description: "Boost your flexibility with this quick and easy stretching routine.",
    link: "https://youtu.be/Ef6LwAaB3_E?si=t9X7p79ta_-P1OVg",
  },
  {
    id: 5,
    title: "Different types of chest Workouts",
    description: "Follow step by step to perform different types of chest workouts at Home. ",
    link: "https://youtu.be/n69-eVLtevc?si=iIYLvkdFi6kEnZQV",
  },
  {
    id: 6,
    title: "Different types of Legs workouts",
    description: "How to perform different kinds of legs workouts.",
    link: "https://youtu.be/EZQMBYoFoRs?si=u2OrxYGWWos3pB1J",
  },
];

// Tutorials Endpoint
app.get("/api/tutorials", (req, res) => {
  res.json(tutorials); // Return the tutorials as a JSON response
});

// Error Middleware
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://himanshuu932:88087408601@cluster0.lu2g8bw.mongodb.net/fitnesstracker?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
};

// Server Start Function
const startServer = async () => {
  try {
    const PORT = process.env.PORT || 8080;
    connectDB();
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("Error starting the server:", err.message);
  }
};

// Start the Server
startServer();
