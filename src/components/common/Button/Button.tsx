import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled = false, type = 'button' }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
