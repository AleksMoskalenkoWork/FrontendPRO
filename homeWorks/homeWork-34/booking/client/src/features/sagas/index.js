import { all } from 'redux-saga/effects';
import { watchTodoSaga } from './todoSaga';
import { watchSwapiSaga } from './swapiSaga';

export default function* rootSaga() {
  yield all([watchTodoSaga(), watchSwapiSaga()]);
}
