import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [], status: 'idle', error: null },

  reducers: {
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    todoDelete: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    todoCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
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
  todoCompleted,
  todoDelete,
  todoRequest,
  todoSuccess,
  todoRejected,
} = todoSlice.actions;

export default todoSlice.reducer;
