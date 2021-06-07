import {
  socketInitError,
  socketInitSuccess,
  socketInitRequest,
} from './tickers-actions';
import io from 'socket.io-client';
const socket = io('http://localhost:4000');

const fetchTickers = () => dispatch => {
  dispatch(socketInitRequest());
  socket.emit('start');
  socket.on('ticker', data =>
    data
      ? dispatch(socketInitSuccess(data))
      : dispatch(socketInitError(new Error('fail'))),
  );
};

export { fetchTickers };
