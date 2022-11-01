import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';
describe('Greeting component', () => {
  test('render Hello World as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .... Nothing

    // Assert
    const helloWordElement = screen.getByText('Hello World!');
    expect(helloWordElement).toBeInTheDocument();
  });

  test('render Good To See You button NOT Click', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .... Nothing

    // Assert
    const paraEl = screen.getByText('Good To See You', { exact: false });
    expect(paraEl).toBeInTheDocument();
  });

  test('render Change! Clicked', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .... Nothing
    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    // Assert
    const changeEl = screen.getByText('Change!');
    expect(changeEl).toBeInTheDocument();
  });

  test('does not render "Good To See You" button was clicked ', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // .... Nothing
    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    // Assert
    const paraEl = screen.queryByText('Good To See You', { exact: false });
    expect(paraEl).toBeNull();
  });
});
