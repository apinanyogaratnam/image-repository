import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

// testing title says Image Repository
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Image Repository/i);
  expect(linkElement).toBeInTheDocument();
});

describe(<App />, () => {
  it('renders images name label', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('p').text()).toBe('Title: ');
  });
});
