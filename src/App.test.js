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

const filter_by_search = (search_text, data) => {
  return data.filter(image => {
      return image.description.includes(search_text) || image.name.includes(search_text);
  });
}

// testing filter by search function
test('testing filter by search query of snow', () => {
  const data = [
    {
        "id": "1",
        "file_name": "image1.jpg",
        "name": "dessert",
        "description": "This is a sandy dessert"
    },
    {
        "id": "2",
        "file_name": "image2.jpg",
        "name": "mountain",
        "description": "This is a snowy mountain"
    },
    {
        "id": "3",
        "file_name": "image3.jpg",
        "name": "woods",
        "description": "This is a dark forest with lots of branches and wood pieces"
    },
    {
        "id": "4",
        "file_name": "image4.jpg",
        "name": "storm",
        "description": "This is a storm with lightning and thunder near a volcano"
    },
    {
        "id": "5",
        "file_name": "image5.jpg",
        "name": "igloo",
        "description": "This is an igloo with snow and an aurora is showing with snow"
    },
    {
        "id": "6",
        "file_name": "image6.jpg",
        "name": "bridge",
        "description": "This is a bridge made out of wood with trees and a forest"
    },
    {
        "id": "7",
        "file_name": "image7.jpg",
        "name": "forest",
        "description": "This is a forest with tall trees and wood sticks and green grass"
    },
    {
        "id": "8",
        "file_name": "image8.jpg",
        "name": "snowy forest",
        "description": "This is a forest with snowy trees and a path to drive"
    },
    {
        "id": "9",
        "file_name": "image9.jpg",
        "name": "mountains",
        "description": "This is a snowy mountain with a path to drive with a rainbow and clounds"
    },
    {
        "id": "10",
        "file_name": "image10.jpg",
        "name": "snowy mountain",
        "description": "This is a snowy mountain with clouds"
    }
]
  var results = filter_by_search("snow", data);
  expect(results.length).toBe(5);
});
