import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({
  disabled = false,
  title,
  variant = 'primary',
  size = 'sm',
  additionalClass = '',
  onClick,
}) => {
  const className = `btn-${variant} btn-${size} ${additionalClass ? additionalClass : ''}`;

  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {title}
    </button>
  );
};

/* proto types */
Button.propTypes = {
  disabled: PropTypes.bool,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  additionalClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

/* default props */
Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  size: 'sm',
};

export default Button;
