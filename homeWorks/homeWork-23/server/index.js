const express = require('express');
const cors = require('cors');
let dataArray = require('./src/dataArray');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/list', (req, res) => {
  res.send(dataArray);
});

app.post('/create/todo', (req, res) => {
  const newTodo = { ...req.body };
  dataArray.push(newTodo);
  res.send(newTodo);
});

app.put('/update/todo/:id', (req, res) => {
  const index = dataArray.findIndex((task) => task.id === req.body.id);
  if (index !== -1) {
    dataArray[index] = req.body;
    res.send(dataArray);
  } else {
    res.status(404);
  }
});

app.delete('/delete/todo/:id', (req, res) => {
  const index = dataArray.findIndex((task) => task.id === req.body.id);
  if (index !== -1) {
    dataArray.splice(index, 1);
    res.send(dataArray);
  } else {
    res.status(404);
  }
});

app.listen(port);
