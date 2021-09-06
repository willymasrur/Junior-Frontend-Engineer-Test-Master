import * as React from 'react';
import { render } from '@testing-library/react';

import ShipCard from './ShipCard';

const testData = {
  id: 'SY-14E',
  type: 'Asp Explorer',
  name: 'W.A.R.T.S.',
  role: 'Medium cargo transport',
  currentStation: 'Flynn Dock',
  value: 14824794,
};

describe('ShipCard', () => {
  test('renders correctly', () => {
    const { container } = render(<ShipCard shipDetail={testData} />);
    expect(container).toBeInTheDocument();
  });

  test('renders button when onSelected is set', () => {
    const { getByText } = render(<ShipCard shipDetail={testData} onSelect={jest.fn()} />);
    const button = getByText('Select Ship');
    expect(button).toBeInTheDocument();
  });

  test('hides button when onSelected is not set', () => {
    const { queryByText } = render(<ShipCard shipDetail={testData} />);
    const button = queryByText(/Select Ship/);
    expect(button).not.toBeInTheDocument();
  });

  test('disables button when ship is selected', () => {
    const { getByText } = render(<ShipCard isSelected shipDetail={testData} onSelect={jest.fn()} />);
    const button = getByText('Select Ship');
    expect(button).toHaveAttribute('disabled');
  });
});
