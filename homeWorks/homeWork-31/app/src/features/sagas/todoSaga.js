import { takeEvery, put } from 'redux-saga/effects';
import {
  todoRequest,
  todoSuccess,
  todoRejected,
  todoDelete,
  todoCompleted,
} from '../todoSlice';

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

function* deleteTodoSaga(action) {
  try {
    yield put(todoDelete(action.payload));
  } catch (error) {
    yield put(todoRejected(error.message));
  }
}

function* completedTodoSaga(action) {
  try {
    yield put(todoCompleted(action.payload));
  } catch (error) {
    yield put(todoRejected(error.message));
  }
}

export function* watchTodoSaga() {
  yield takeEvery('todo/addTodoSaga', addTodoSaga);
  yield takeEvery('todo/deleteTodoSaga', deleteTodoSaga);
  yield takeEvery('todo/completedTodoSaga', completedTodoSaga);
}
