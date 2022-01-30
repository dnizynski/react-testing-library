import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoadingButton from '.';

describe('Loading Button', () => {
  it('renders provided text', () => {
    const text = 'example text';

    render(<LoadingButton {...{ text }} />);

    const providedText = screen.getByText('example text');
    expect(providedText).toBeVisible();
  });

  it('does call onClick function after clicking', async () => {
    const text = 'example text';
    const onClick = jest.fn().mockResolvedValue(undefined);

    render(<LoadingButton {...{ text, onClick }} />);

    const providedText = screen.getByText('example text');

    userEvent.click(providedText);

    expect(onClick).toBeCalledTimes(1);

    // await waitForElementToBeRemoved(
    //   screen.queryByText('loading...', { exact: false })
    // );
  });
});
