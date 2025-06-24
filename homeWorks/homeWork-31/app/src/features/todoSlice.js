import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todos: [], status: 'idle', error: null },

  reducers: {
    add: (state, action) => {
      console.log('todoSlice add', action);

      state.todos.push(action.payload);
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

export const { add, todoRequest, todoSuccess, todoRejected } =
  todoSlice.actions;

export default todoSlice.reducer;
