import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SocketMock from 'socket.io-mock';

// import fetchMock from 'fetch-mock';

import {
  socketInitSuccess,
  socketInitRequest,
  socketInitError,
} from './tickers/tickers-actions';
import reducer from './tickers/tickers-reducers';
import { fetchTickers } from './tickers/tickers-operations';

describe('testing actions', () => {
  it('socketInitSuccess should return  a new object', () => {
    expect(socketInitSuccess(1234)).toMatchObject({
      type: 'tickers/socketInitSuccess',
      payload: 1234,
    });
  });
  it('socketInitRequest should return  a new object', () => {
    expect(socketInitRequest()).toMatchObject({
      type: 'tickers/socketInitRequest',
    });
  });
  it('socketInitError should return  a new object', () => {
    expect(socketInitError()).toMatchObject({
      type: 'tickers/socketInitError',
    });
  });
});

describe('testing reducer', () => {
  const initialState = {
    tickers: [],
    isConnected: false,
    error: null,
  };
  it('reducer should return  a new state: tickers', () => {
    const action = { type: 'tickers/socketInitSuccess', payload: ['tiker'] };

    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      tickers: ['tiker'],
      isConnected: false,
      error: null,
    });
  });

  it('reducer should return  a new state : isConnected', () => {
    const action = {
      type: 'tickers/socketInitError',
      payload: { message: 'fail' },
    };

    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      tickers: [],
      isConnected: false,
      error: { message: 'fail' },
    });
  });

  it('reducer should return  a new state: error', () => {
    const action = {
      type: 'tickers/socketInitRequest',
    };

    const newState = reducer(initialState, action);

    expect(newState).toMatchObject({
      tickers: [],
      isConnected: true,
      error: null,
    });
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('testing operations', () => {
  let socket = new SocketMock();

  it('fetchTickers should return  a new object', async () => {
    await socket.on('ticker', function (data) {
      expect(data).toBe('connect');
    });
    await socket.socketClient.emit('ticker', 'connect');

    const expected = {
      tickers: 'connect',
      isConnected: false,
    };
    const store = mockStore({ tickers: 'connect', isConnected: false });

    await store.dispatch(fetchTickers());
    // return of async actions
    expect(store.getState()).toMatchObject(expected);
  });
});
