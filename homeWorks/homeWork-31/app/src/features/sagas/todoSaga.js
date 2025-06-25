import { takeEvery, put } from 'redux-saga/effects';
import {
  todoRequest,
  todoSuccess,
  todoRejected,
  todoDelete,
  todoCompleted,
  todoEdit,
  todoClear,
} from '../todoSlice';

let id = 1;

function* addTodoSaga(action) {
  try {
    yield put(todoRequest());
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

function* editTodoSaga(action) {
  try {
    yield put(todoEdit(action.payload));
  } catch (error) {
    yield put(todoRejected(error.message));
  }
}

function* clearTodoSaga() {
  try {
    yield put(todoClear());
  } catch (error) {
    yield put(todoRejected(error.message));
  }
}

export function* watchTodoSaga() {
  yield takeEvery('todo/addTodoSaga', addTodoSaga);
  yield takeEvery('todo/deleteTodoSaga', deleteTodoSaga);
  yield takeEvery('todo/completedTodoSaga', completedTodoSaga);
  yield takeEvery('todo/editTodoSaga', editTodoSaga);
  yield takeEvery('todo/clearTodoSaga', clearTodoSaga);
}
