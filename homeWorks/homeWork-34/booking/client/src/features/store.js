import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import swapiReducer from './swapiSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todo: todoReducer,
    swapi: swapiReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
