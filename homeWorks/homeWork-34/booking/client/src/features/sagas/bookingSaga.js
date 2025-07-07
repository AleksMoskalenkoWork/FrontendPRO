import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
  bookingRequest,
  bookingSuccess,
  bookingRejected,
} from '../bookingSlice';

function* fetchDestinationSaga(action) {
  try {
    yield put(bookingRequest());
    const response = yield call(fetch, `http://localhost:/destination`);
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const data = yield response.json();
    yield put(bookingSuccess(data));
  } catch (error) {
    yield put(bookingRejected(error.message));
  }
}

// function* clearSwapiSaga() {
//   try {
//     yield put(swapiClear());
//   } catch (error) {
//     yield put(swapiRejected(error.message));
//   }
// }

export function* watchBookingSaga() {
  yield takeLatest('booking/fetchDestinationSaga', fetchDestinationSaga);
}
