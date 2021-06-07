import {
  socketInitError,
  socketInitSuccess,
  socketInitRequest,
} from './tickers-actions';
import socket from '../../utils/socket';
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
