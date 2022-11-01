import { render, screen } from '@testing-library/react';
import Async from './Async';
describe('Async component', () => {
  test('render post request success', async () => {
    window.fetch = jest.fn();

    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Post' }],
    });

    // Arrange
    render(<Async />);

    // Act
    // .... Nothing

    // Assert
    const listItemEl = await screen.findAllByRole('listitem');
    expect(listItemEl).not.toHaveLength(0);
  });
});
