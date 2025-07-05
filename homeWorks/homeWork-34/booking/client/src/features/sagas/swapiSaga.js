import { takeEvery, put, call, takeLatest } from 'redux-saga/effects';
import {
  swapiRequest,
  swapiSuccess,
  swapiRejected,
  swapiClear,
} from '../swapiSlice';

function* fetchSwapiSaga(action) {
  try {
    yield put(swapiRequest());
    const response = yield call(
      fetch,
      `https://www.swapi.tech/api/${action.payload}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data.');
    }
    const data = yield response.json();
    yield put(swapiSuccess(data));
  } catch (error) {
    yield put(swapiRejected(error.message));
  }
}

function* clearSwapiSaga() {
  try {
    yield put(swapiClear());
  } catch (error) {
    yield put(swapiRejected(error.message));
  }
}

export function* watchSwapiSaga() {
  yield takeLatest('swapi/fetchSwapiSaga', fetchSwapiSaga);
  yield takeLatest('swapi/clearSwapiSaga', clearSwapiSaga);
}
