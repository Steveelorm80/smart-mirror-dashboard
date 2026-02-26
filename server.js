import express from "express";
import app from "./app.js";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Serve React static files */
app.use(express.static(path.join(__dirname, "frontend/dist")));

/* Catch-all */
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
