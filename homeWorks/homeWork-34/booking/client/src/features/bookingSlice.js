import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: { booking: [], status: 'idle', error: null },

  reducers: {
    // bookingClear: (state) => {
    //   state.swapis = [];
    //   state.error = null;
    // },
    bookingRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    bookingSuccess: (state, action) => {
      state.status = 'success';
      //   state.swapis = [];
      //   state.swapis.push(action.payload.result);
    },
    bookingRejected: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { bookingRequest, bookingSuccess, bookingRejected } =
  bookingSlice.actions;

export default bookingSlice.reducer;
