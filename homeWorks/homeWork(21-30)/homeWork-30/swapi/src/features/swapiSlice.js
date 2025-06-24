import { createSlice } from '@reduxjs/toolkit';
import { fetchSwapi } from './middleware/fetchSwapi';

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: { entities: [], status: 'idle', error: null },

  reducers: {
    cleareState: (state) => {
      state.entities = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapi.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchSwapi.fulfilled, (state, action) => {
        state.status = 'successed';
        state.entities = [];
        state.entities.push(action.payload);
      })
      .addCase(fetchSwapi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { cleareState } = swapiSlice.actions;

export default swapiSlice.reducer;
