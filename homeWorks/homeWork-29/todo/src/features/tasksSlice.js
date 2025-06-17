import { createSlice } from '@reduxjs/toolkit';

let idNext = 0;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: idNext++,
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTask } = tasksSlice.actions;

export default tasksSlice.reducer;
