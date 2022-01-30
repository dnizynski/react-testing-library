import React, { useState } from 'react';

interface LoadingButtonProps {
  onClick?: () => Promise<any>;
  disabled?: boolean;
  text?: string;
}

const LoadingButton = ({ onClick, disabled, text }: LoadingButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (disabled || !onClick) return;

    try {
      setIsLoading(true);
      await onClick();
    } catch {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={handleClick}>
      {isLoading && <span>loading... </span>} {text}
    </button>
  );
};

export default LoadingButton;
