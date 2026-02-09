const express = require("express");
const app = express();

// CORS FIX: allow frontend to talk to backend
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api", (req, res) => {
  res.json({
    message: "Backend is working 🚀"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

