import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('<Button />', () => {
  it('renders provided text', () => {
    const text = 'example text';

    render(<Button {...{ text }} />);

    const providedText = screen.getByText(text);
    expect(providedText).toBeVisible();
  });

  it('does call onClick function after clicking', () => {
    const text = 'example text';
    const onClick = jest.fn();

    render(<Button {...{ text, onClick }} />);

    const providedText = screen.getByText(text);

    userEvent.click(providedText);

    expect(onClick).toBeCalledTimes(1);
  });

  it('does not call onClick function after clicking when disabled', () => {
    const text = 'example text';
    const onClick = jest.fn();

    render(<Button {...{ text, onClick }} disabled />);

    const providedText = screen.getByText(text);

    userEvent.click(providedText);

    expect(onClick).toBeCalledTimes(0);
  });
});
