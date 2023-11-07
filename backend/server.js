const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const myRouter = require('./routes/goalsRouters.js');
const { errorHandler } = require('./middleware/errorMiddleware.js');
const PORT = process.env.PORT || 7777;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/api/goals', myRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
