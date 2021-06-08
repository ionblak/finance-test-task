import { useSelector } from 'react-redux';
import { getTickkers } from '../../redux/tickers/tickers-selectors';
import getFullNameTicker from '../../utils/ticker-name';
import styles from './TableComponent.module.css';

const TableComponent = () => {
  const value = useSelector(getTickkers);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th className={styles.exchange}>Exchange</th>
          <th>Price</th>
          <th>Change</th>
          <th>Change%</th>
          <th className={styles.time}>Last trade time</th>
          <th>Yield</th>
        </tr>
      </thead>
      <tbody>
        {value.map(item => {
          const color =
            Number(item.change_percent) > 0 ? styles.green : styles.red;
          return (
            <tr key={item.ticker}>
              <td>{getFullNameTicker(item.ticker)}</td>
              <td>{item.ticker}</td>
              <td className={styles.exchange}>{item.exchange}</td>
              <td>{item.price}</td>
              <td>{item.change}</td>
              <td className={color}>{item.change_percent}</td>
              <td className={styles.time}>{item.last_trade_time}</td>
              <td>{item.yield}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
