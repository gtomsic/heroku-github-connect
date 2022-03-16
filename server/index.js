const express = require("express");
const cors = require("cors");
const colors = require("colors");

const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`.green.bold.inverse);
});
