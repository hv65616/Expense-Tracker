const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// middlewares
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});