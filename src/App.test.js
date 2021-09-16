import { render, screen } from '@testing-library/react';
import App from './App';

// testing title says Image Repository
test('renders App component and checks title accuracy', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image Repository/i);
  expect(linkElement).toBeInTheDocument();
});

// testing search bar placeholder text
test('renders App component and checks if search bar is showing placeholder text', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Search.../i);
  expect(linkElement).toBeInTheDocument();
});

// testing textbox existence
test('renders App component and checks if form is showing', () => {
  render(<App />);
  const linkElement = screen.getByRole('textbox');
  expect(linkElement).toBeInTheDocument();
});
