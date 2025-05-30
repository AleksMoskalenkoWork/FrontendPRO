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

app.get('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const task = await TodoModel.findById(id);

  if (task) {
    res.send(task);
  } else {
    res.status(404);
  }
});

app.put('/update/todo/:id', async (req, res) => {
  const updated = await TodoModel.findByIdAndUpdate(req.params.id, req.body);

  if (updated) {
    res.send(updated);
  } else {
    res.status(404).send('Задачу не знайдено');
  }
});

app.delete('/delete/todo/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await TodoModel.findByIdAndDelete(id);
  if (deleted) {
    res.send(deleted);
  } else {
    res.status(404).send('Задачу не знайдено');
  }
});

app.listen(port);
