import { render, screen } from '@testing-library/react';
import App from './App';
import { create } from 'react-test-renderer';

describe("App tests", () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('App matches snapshot', () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  })
})
