const express = require('express');
const cors = require('cors');
const db = require('./src/DBConnection');
const TodoModel = require('./src/TodoSchema');
const app = express();
const port = 3000;

db();

app.use(cors());
app.use(express.json());

app.get('/list', async (req, res) => {
  const list = await TodoModel.find();
  res.send(list);
});

app.post('/create/todo', (req, res) => {
  const newTodo = new TodoModel(req.body);
  newTodo.save().then((todo) => {
    res.status(201).send(todo);
  });
});

app.get('/todo/:id', (req, res) => {
  const task = dataArray.find((task) => task.id === +req.params.id);

  if (task) {
    res.send(task);
  } else {
    res.status(404);
  }
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
