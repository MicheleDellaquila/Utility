import React from 'react';
import './button.css';

const Button = ({ disabled = false, title, variant = 'primary', size = 'sm', onClick }) => {
  const className = `btn-${variant} btn-${size}`;

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
