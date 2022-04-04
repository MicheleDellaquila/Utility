import React from 'react';
import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

const Modal = ({
  size,
  title,
  children,
  onClose,
  animation,
  btn,
  titleBtn = !btn && undefined,
  onClickBtn = !btn && undefined,
  disabledBtn = !btn && undefined,
}) => {
  return (
    <div className='Modal--Backdrop'>
      <div className={`Modal Modal-${size} Modal--${animation}`}>
        <header className='Modal__header'>
          <h1 className='Modal__header-title'>{title}</h1>
          <div className='Modal__close' onClick={onClose}>
            <CloseIcon className='Modal__close-icon' />
          </div>
        </header>
        <div className='Modal__body'>{children}</div>
        {btn && (
          <footer className='Modal__footer'>
            <Button
              disabled={disabledBtn}
              size='md'
              title={titleBtn}
              additionalClass='Modal__footer-btn'
              onClick={onClickBtn}
            />
          </footer>
        )}
      </div>
    </div>
  );
};

/* proto types */
Modal.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  onClose: PropTypes.func.isRequired,
  animation: PropTypes.string.isRequired,
  btn: PropTypes.bool.isRequired,
  titleBtn: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([undefined])]),
  disabledBtn: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf([undefined])]),
};

export default Modal;
