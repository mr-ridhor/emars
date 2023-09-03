// components/Button.tsx
import React from 'react';

interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={`bg-green-300 p-2 rounded-md text-white font-bold w-full ${className}`}>
      {label}
    </button>
  );
}

export default Button;
