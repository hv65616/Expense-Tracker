const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("../backend/db/db");
const { readdirSync } = require("fs");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
// middlewares
app.use(express.json());
app.use(cors());

// database
db();

// routes
readdirSync("./routes").map((route) => {
  app.use("/api/v1", require("./routes/transactions"));
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
});
