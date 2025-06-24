import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import createSagaMiddleware from 'redux-saga';
import { watchTodoSaga } from './sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(watchTodoSaga);

export default store;
