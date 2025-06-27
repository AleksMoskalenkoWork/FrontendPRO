import { createSlice } from '@reduxjs/toolkit';

const swapiSlice = createSlice({
  name: 'swapi',
  initialState: { swapis: [], status: 'idle', error: null },

  reducers: {
    swapiClear: (state) => {
      state.swapi = [];
      state.error = null;
    },
    swapiRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    swapiSuccess: (state, action) => {
      state.status = 'success';
      state.swapis = [];
      state.swapis.push(action.payload.result);
    },
    swapiRejected: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { swapiClear, swapiRequest, swapiSuccess, swapiRejected } =
  swapiSlice.actions;

export default swapiSlice.reducer;
