const express = require("express");
const cors = require("cors");
const { participants } = require("./data");

var corsOptions = {
  origin: 'http://localhost:3000'
};

const app = express();

app.use(cors(corsOptions));

app.get("/participants", (_, res) => {
  res.json(participants);
});

module.exports = { app };
