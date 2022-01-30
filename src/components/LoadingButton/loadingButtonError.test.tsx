import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoadingButton from '.';

describe('Loading Button', () => {
  it('throws error', async () => {
    const text = 'example text';
    const onClick = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => {
            throw new Error();
            resolve(undefined);
          }, 500)
        )
    );

    render(<LoadingButton {...{ text, onClick }} />);

    const providedText = screen.getByText('example text');

    userEvent.click(providedText);

    expect(providedText).toBeVisible();
  });

  it('should pass', async () => {
    const text = 'example text';
    const onClick = jest.fn().mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => {
            resolve(undefined);
          }, 1000)
        )
    );

    render(<LoadingButton {...{ text, onClick }} />);

    const providedText = screen.getByText('example text');

    userEvent.click(providedText);

    expect(onClick).toBeCalledTimes(1);

    await waitForElementToBeRemoved(
      screen.queryByText('loading...', { exact: false })
    );
  });
});
