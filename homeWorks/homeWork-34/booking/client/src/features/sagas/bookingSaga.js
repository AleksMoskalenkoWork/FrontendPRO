import { put, call, takeLatest } from 'redux-saga/effects';
import {
  bookingRequest,
  bookingRejected,
  setDestination,
  setHotels,
  setSearch,
} from '../bookingSlice';

function* fetchDestinationSaga() {
  try {
    yield put(bookingRequest());
    const response = yield call(
      fetch,
      `${import.meta.env.VITE_BASE_URL_API}/destination`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const destination = yield response.json();
    yield put(setDestination(destination));
  } catch (error) {
    yield put(bookingRejected(error.message));
  }
}

function* fetchHotelsSaga() {
  try {
    yield put(bookingRequest());
    const response = yield call(
      fetch,
      `${import.meta.env.VITE_BASE_URL_API}/hotels`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const hotels = yield response.json();
    yield put(setHotels(hotels));
  } catch (error) {
    yield put(bookingRejected(error.message));
  }
}

function* fetchSearchSaga(action) {
  try {
    yield put(bookingRequest());

    const response = yield call(
      fetch,
      `${import.meta.env.VITE_BASE_URL_API}/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(action.payload),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }

    const search = yield response.json();
    yield put(setSearch(search));
  } catch (error) {
    yield put(bookingRejected(error.message));
  }
}

export function* watchBookingSaga() {
  yield takeLatest('booking/fetchDestinationSaga', fetchDestinationSaga);
  yield takeLatest('booking/fetchHotelsSaga', fetchHotelsSaga);
  yield takeLatest('booking/fetchSearchSaga', fetchSearchSaga);
}
