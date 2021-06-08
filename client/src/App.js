import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { fetchTickers } from './redux/tickers/tickers-operations';

import Header from './Components/Header';
import Container from './Components/Container';
import Table from './Components/Table';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTickers());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container>
        <Table />
      </Container>
    </>
  );
}

export default App;
