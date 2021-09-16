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

// testing number of title labels
test('renders App Component and checks if count of title labels are accurate', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Title:/i);
  expect(linkElement.length).toBe(10);
});

// testing number of description labels
test('renders App Component and checks if count of description labels are accurate', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Description:/i);
  expect(linkElement.length).toBe(10);
});

// testing number of filename labels
test('renders App Component and checks if count of filename labels are accurate', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Filename:/i);
  expect(linkElement.length).toBe(10);
});
