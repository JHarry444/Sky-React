import { render, screen } from '@testing-library/react';
import App from './App';
import { act, create } from 'react-test-renderer';
import Trainer from './components/Trainer';
import HandlingChange from './components/HandlingChange';

jest.mock("./components/CreatedDate", function () {
  return function () {
    return <p>{new Date("1994-04-04").toString()}</p>;
  };
});

describe("App tests", () => {

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('App matches snapshot', () => {
    const app = create(<App />);
    expect(app.toJSON()).toMatchSnapshot();
  });

  test('Component renders with props', () => {
    const name = "JH";
    const age = 27;
    const specialism = "software";

    const testRenderer = create(<Trainer name={name} age={age} specialism={specialism} />);
    const testInstance = testRenderer.root;

    const paragraphs = testInstance.findAllByType("p");

    expect(paragraphs[0].children).toContain(`Name: ${name}`);
    expect(paragraphs[1].children).toContain(`Age: ${age}`);
    expect(paragraphs[2].children).toContain(`Specialism: ${specialism}`);
  });

  test.only("test that the change is handled", () => {
    const testRenderer = create(<HandlingChange />);
    const testInstance = testRenderer.root;
    const input = testInstance.findByType("input");
    const event = {
      target: {
        value: "bloop"
      }
    };
    act(() => {
      input.props.onChange(event);
    })

    expect(input.props.value).toEqual("bloop");
  });
});
