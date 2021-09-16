import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

// testing title says Image Repository
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image Repository/i);
  expect(linkElement).toBeInTheDocument();
});
