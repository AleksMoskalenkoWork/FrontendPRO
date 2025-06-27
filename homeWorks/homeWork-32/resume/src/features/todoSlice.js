import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [], status: 'idle', error: null },

  reducers: {
    todoClear: (state) => {
      state.todos = [];
      state.error = null;
    },
    todoDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    todoCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todoEdit: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    todoRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    todoSuccess: (state, action) => {
      state.status = 'success';
      state.todos.push(action.payload);
    },
    todoRejected: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {
  todoClear,
  todoEdit,
  todoCompleted,
  todoDelete,
  todoRequest,
  todoSuccess,
  todoRejected,
} = todoSlice.actions;

export default todoSlice.reducer;
