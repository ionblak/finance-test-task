import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import reducer from './tickers/tickers-reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {},
  }),
];

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export { store };
