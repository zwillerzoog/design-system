import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LocationWidget from './LocationWidget';

afterEach(cleanup);

it('renders without crashing', () => {
  const { container } = render(<LocationWidget />);
  expect(container).toBeInTheDocument();
});
