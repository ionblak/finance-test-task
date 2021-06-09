import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { fetchTickers } from './redux/tickers/tickers-operations';

import Container from './Components/Container';
import TableComponent from './Components/TableComponent';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  return (
    <div>
      <Container>
        <TableComponent />
      </Container>
    </div>
  );
}

export default App;
