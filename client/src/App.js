import './App.css';
// import io from 'socket.io-client';
// const socket = io('http://localhost:4000');
// socket.emit('start');
// socket.on('ticker', data => console.log(data));
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTickers } from './redux/tickers/socketMiddleware';
import { getTickkers } from './redux/tickers/tickers-selectors';

function App() {
  const value = useSelector(getTickkers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <ul>
        {value.map(item => (
          <li key={item.ticker}>
            {item.ticker}
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
