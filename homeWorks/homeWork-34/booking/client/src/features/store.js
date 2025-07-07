import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import bookingReducer from './bookingSlice';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
