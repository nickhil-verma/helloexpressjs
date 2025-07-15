// api/hello.js
const express = require("express");
const serverless = require("serverless-http");

const app = express();

// ✅ This is now correct: root route inside handler
app.get("/", (req, res) => {
  res.json({ message: "✅ Hello from Express on Vercel!" });
});

module.exports = app;
module.exports.handler = serverless(app);
