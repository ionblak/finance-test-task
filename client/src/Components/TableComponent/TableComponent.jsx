import { useSelector } from 'react-redux';
import { getTickkers } from '../../redux/tickers/tickers-selectors';
import getFullNameTicker from '../../helpers/ticker-name';
import changeDate from '../../helpers/change-date';
import styles from './TableComponent.module.css';

const TableComponent = () => {
  const tickers = useSelector(getTickkers);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Exchange</th>
          <th>Price</th>
          <th>Change</th>
          <th>Change%</th>
          <th>Time</th>
          <th>Yield</th>
        </tr>
      </thead>
      <tbody>
        {tickers.map(item => {
          const color =
            Number(item.change_percent) > 0 ? styles.green : styles.red;
          return (
            <tr key={item.ticker}>
              <td>{getFullNameTicker(item.ticker)}</td>
              <td className={color}>{item.ticker}</td>
              <td>{item.exchange}</td>
              <td>{item.price}</td>
              <td>{item.change}</td>
              <td className={color}>{item.change_percent}</td>
              <td>{changeDate(item.last_trade_time)}</td>
              <td>{item.yield}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableComponent;
