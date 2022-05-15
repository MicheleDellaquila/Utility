import React from 'react';
import './modal.css';

const Modal = ({ size, children, animation }) => {
  return (
    <div className='Modal--Backdrop'>
      <div className={`Modal Modal-${size} Modal--${animation}`}>{children}</div>
    </div>
  );
};

export default Modal;
