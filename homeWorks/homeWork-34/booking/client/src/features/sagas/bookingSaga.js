import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
  bookingRequest,
  bookingSuccess,
  bookingRejected,
  setDestination,
  setHotels,
} from '../bookingSlice';

function* fetchDestinationSaga(action) {
  try {
    yield put(bookingRequest());
    const response = yield call(fetch, 'http://localhost:3100/destination');
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const destination = yield response.json();
    yield put(setDestination(destination));
  } catch (error) {
    yield put(bookingRejected(error.message));
  }
}

function* fetchHotelsSaga(action) {
  try {
    yield put(bookingRequest());
    const response = yield call(fetch, 'http://localhost:3100/hotels');
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const hotels = yield response.json();
    yield put(setHotels(hotels));
  } catch (error) {
    yield put(bookingRejected(error.message));
  }
}

export function* watchBookingSaga() {
  yield takeLatest('booking/fetchDestinationSaga', fetchDestinationSaga);
  yield takeLatest('booking/fetchHotelsSaga', fetchHotelsSaga);
}
