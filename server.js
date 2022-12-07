const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use("/", authRoute);

mongoose.connect(process.env.DATABASE_DB, () => {
  console.log("Database Connect🔥");
});
const PORT = process.env.PORT || 4000;
app.listen(PORT);
console.log(`Server running on port ${PORT} 🔥`);
