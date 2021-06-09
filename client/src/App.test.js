import App from './App';

import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';

describe('testing App', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  it('should renders', () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch());
    const wraper = shallow(<App />);

    expect(wraper.exists()).toBe(true);
  });
});
