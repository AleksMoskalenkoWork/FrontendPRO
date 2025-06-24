import { takeEvery, delay, put } from 'redux-saga/effects';
import { todoRequest, todoSuccess, todoRejected } from '../todoSlice';

let id = 1;

function* addTodoSaga(action) {
  try {
    const todo = {
      id: id++,
      text: action.payload,
      completed: false,
    };
    yield put(todoSuccess(todo));
  } catch (error) {
    yield put(todoRejected(error.message));
  }
}

export function* watchTodoSaga() {
  yield takeEvery('todo/addTodoSaga', addTodoSaga);
}
