const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  id: { type: Number, required: true },
  isMarked: { type: Boolean, default: false },
  taskName: { type: String, required: true },
});

const TodoModel = mongoose.model('Todos', TodoSchema);
module.exports = TodoModel;
