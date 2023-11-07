const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const PORT = process.env.PORT || 7777;
const myRouter = require("./routes/goalsRouters.js");

const app = express();

app.use(cors());

app.use("/api/goals", myRouter);

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
