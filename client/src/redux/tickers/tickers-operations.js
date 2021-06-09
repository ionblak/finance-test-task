import {
  socketInitError,
  socketInitSuccess,
  socketInitRequest,
} from './tickers-actions';
import socket from '../../helpers/socket';

const fetchTickers = () => dispatch => {
  dispatch(socketInitRequest());

  return socket.on('ticker', data =>
    data
      ? dispatch(socketInitSuccess(data))
      : dispatch(socketInitError(new Error('fail'))),
  );
};

export { fetchTickers };
