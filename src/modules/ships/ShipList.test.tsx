import * as React from 'react';
import { render } from '@testing-library/react';

import ShipList from './ShipList';

const testData = [
  {
    id: 'SY-14E',
    type: 'Asp Explorer',
    name: 'W.A.R.T.S.',
    role: 'Medium cargo transport',
    currentStation: 'Flynn Dock',
    value: 14824794,
  },
  {
    id: 'SY-99E',
    type: 'Python',
    name: 'Plantasia',
    role: 'Multi-role',
    currentStation: 'Baird Gateway',
    value: 76281494,
  },
  {
    id: 'SY-19K',
    type: 'Krait Mk II',
    name: 'Anthoine Hubert',
    role: 'Multi-role',
    currentStation: 'Flynn Dock',
    value: 76281494,
  },
];

describe('ShipCard', () => {
  test('renders correctly', () => {
    const { container } = render(<ShipList ships={testData} />);
    expect(container).toBeInTheDocument();
  });
});
