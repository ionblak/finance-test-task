import { render } from '@testing-library/react';
import Container from './Container';

describe('Container', () => {
  it('Container should render properly', () => {
    const { container } = render(<Container />);
    expect(container).toMatchSnapshot();
  });
});
