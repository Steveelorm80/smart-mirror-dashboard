import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

// Middlewares
//app.use(cors());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Routes
app.use("/api/dashboard", dashboardRoutes);

// Test route
// app.get("/", (req, res) => {
//   res.send("Mirror Dashboard API Running 🚀");
// });

export default app;
