import React from 'react';
import './field.css';
import Input from '../input/input';

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

export default Field;
