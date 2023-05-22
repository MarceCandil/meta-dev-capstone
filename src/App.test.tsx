import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders header, main and footer', () => {
  render(<BrowserRouter><App /></BrowserRouter>);

  const header = screen.getByTestId("header");
  const main = screen.getByTestId("main");
  const footer = screen.getByTestId("footer");

  expect(header).toBeInTheDocument();
  expect(main).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
