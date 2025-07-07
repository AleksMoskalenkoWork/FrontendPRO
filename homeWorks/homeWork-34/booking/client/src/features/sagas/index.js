import { all } from 'redux-saga/effects';
import { watchBookingSaga } from './bookingSaga';

export default function* rootSaga() {
  yield all([watchBookingSaga()]);
}
