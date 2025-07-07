import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: { hotels: [], destination: [], status: 'idle', error: null },

  reducers: {
    bookingRequest: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    bookingSuccess: (state, action) => {
      state.status = 'success';
      //   state.swapis = [];
      state.booking.push(action.payload);
    },
    bookingRejected: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const {
  bookingRequest,
  bookingSuccess,
  bookingRejected,
  setDestination,
  setHotels,
} = bookingSlice.actions;

export default bookingSlice.reducer;
