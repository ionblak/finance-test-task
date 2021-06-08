import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  socketInitError,
  socketInitRequest,
  socketInitSuccess,
} from './tickers-actions';

const INITIAL_TICKERS = [];

const itemsTickers = createReducer(INITIAL_TICKERS, {
  [socketInitSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [socketInitError]: (_, { payload }) => payload,
});
const isConnected = createReducer(false, {
  [socketInitRequest]: () => true,

  [socketInitError]: () => false,
});

export default combineReducers({
  tickers: itemsTickers,
  isConnected,
  error,
});
