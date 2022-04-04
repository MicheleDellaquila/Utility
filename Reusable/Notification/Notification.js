import React, { useEffect } from 'react';
import './Notification.css';
import Error from '../../Assets/Icons/error.png';
import Success from '../../Assets/Icons/success.png';
import Info from '../../Assets/Icons/information.png';
import PropTypes from 'prop-types';

const style = (type) => {
  switch (type.toUpperCase()) {
    case 'SUCCESS':
      return 'Success';

    case 'ERROR':
      return 'Error';

    case 'INFO':
      return 'Info';

    default:
      return;
  }
};

const Notification = ({ type, message, onClose, animation }) => {
  const classNotification = style(type);

  // effect for set timeout close notification
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [message, onClose]);

  // render icon
  const renderIcon = () => {
    switch (type.toUpperCase()) {
      case 'SUCCESS':
        return Success;

      case 'ERROR':
        return Error;

      case 'INFO':
        return Info;

      default:
        return;
    }
  };

  return (
    <div className={`Notification fixed Notification-${classNotification} ${animation}`}>
      <div className='flex items-center p-4'>
        <img className='Notification__icon' src={renderIcon()} alt='type message' />
        <h1 className='Notification__title font-sans font-medium ml-3'>{message}</h1>
      </div>
    </div>
  );
};

/* proto types */
Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  animation: PropTypes.string.isRequired,
};

export default Notification;
