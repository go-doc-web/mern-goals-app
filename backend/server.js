const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const myRouter = require("./routes/goalsRouters.js");

const PORT = process.env.PORT || 7777;

const app = express();

app.use(cors());

app.use("/api/goals", myRouter);

goals;

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
