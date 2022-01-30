import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
}

const Button = ({ onClick, disabled, text }: ButtonProps) => {
  const handleClick = () => !disabled && onClick?.();

  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
