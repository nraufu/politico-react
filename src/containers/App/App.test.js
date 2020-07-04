import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders politico react version paragraph', () => {
  const { getByText } = render(<App />);
  const introParagraph = getByText(/Politico React version/i);
  expect(introParagraph).toBeInTheDocument();
});
