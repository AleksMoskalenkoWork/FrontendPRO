const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const dbConnection = require('./DBConnection');

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(
    `Server listen port: ${process.env.PORT}, and run on http://localhost:${process.env.PORT}`
  );
});
