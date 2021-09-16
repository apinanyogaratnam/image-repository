import { render, screen } from '@testing-library/react';
import App from './App';

// testing title says Image Repository
test('renders App component and checks title accuracy', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image Repository/i);
  expect(linkElement).toBeInTheDocument();
});
