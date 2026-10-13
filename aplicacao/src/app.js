const os = require("os");
const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send(`Hello World from ${os.hostname()}\n`);
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

module.exports = app;
