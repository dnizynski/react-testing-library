import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoadingButton from '.';
import { act } from 'react-dom/test-utils';

describe('Loading Button', () => {
  it('renders provided text', () => {
    const text = 'example text';

    render(<LoadingButton {...{ text }} />);

    const providedText = screen.getByText('example text');
    expect(providedText).toBeVisible();
  });

  it('does call onClick function after clicking', async () => {
    const text = 'example text';
    let resolve: (value?: unknown) => void = () => {};

    const onClick = jest.fn().mockImplementation(
      () =>
        new Promise((_resolve) => {
          resolve = _resolve;
        })
    );

    render(<LoadingButton {...{ text, onClick }} />);

    const providedText = screen.getByText('example text');

    userEvent.click(providedText);

    await act(async () => {
      resolve();
    });

    expect(onClick).toBeCalledTimes(1);
  });
});
