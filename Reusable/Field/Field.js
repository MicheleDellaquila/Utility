import React from 'react';
import './Field.css';
import Input from '../Input/Input';
import PropTypes from 'prop-types';

const Field = ({ disabled = false, label, type, name, placeholder, onChange, value, error }) => {
  return (
    <div className='Field'>
      <label className='Field__label' htmlFor={name}>
        {label}
      </label>
      <Input
        disabled={disabled}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {error && <p className='Field__error'>{error}</p>}
    </div>
  );
};

/* proto types */
Field.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default Field;
