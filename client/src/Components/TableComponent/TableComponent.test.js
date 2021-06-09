import TabelComponent from './TableComponent';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';

describe('testing TabelComponent', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
  });
  it('should renders', async () => {
    await useSelectorMock.mockReturnValue([
      {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: 279.29,
        change: 64.52,
        change_percent: 0.84,
        dividend: 0.56,
        yield: 1.34,
        last_trade_time: '2021-04-30T11:53:21.000Z',
      },
      {
        ticker: 'GOOGL',
        exchange: 'NASDAQ',
        price: 237.08,
        change: 154.38,
        change_percent: 0.1,
        dividend: 0.46,
        yield: 1.18,
        last_trade_time: '2021-04-30T11:53:21.000Z',
      },
    ]);

    const wraper = shallow(<TabelComponent />);

    expect(wraper.exists()).toBe(true);
  });
});
