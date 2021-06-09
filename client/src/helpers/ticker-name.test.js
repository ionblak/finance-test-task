import getFullNameTicker from './ticker-name';

describe('testing getFullNameTicker function', () => {
  it('function return default answer', () => {
    const result = 'Unknown';
    expect(getFullNameTicker('fewqf')).toBe(result);
  });

  it('function return correct answer Tesla', () => {
    const result = 'Tesla';
    expect(getFullNameTicker('TSLA')).toBe(result);
  });
  it('function return correct answer Amazon', () => {
    const result = 'Amazon';
    expect(getFullNameTicker('AMZN')).toBe(result);
  });
  it('function return correct answer Microsoft', () => {
    const result = 'Microsoft';
    expect(getFullNameTicker('MSFT')).toBe(result);
  });
  it('function return correct answer Facebook', () => {
    const result = 'Facebook';
    expect(getFullNameTicker('FB')).toBe(result);
  });
});
