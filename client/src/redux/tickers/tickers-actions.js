import { createAction } from '@reduxjs/toolkit';

const socketInitRequest = createAction('tickers/socketInitRequest');
const socketInitSuccess = createAction('tickers/socketInitSuccess');
const socketInitError = createAction('tickers/socketInitError');

export { socketInitRequest, socketInitSuccess, socketInitError };
