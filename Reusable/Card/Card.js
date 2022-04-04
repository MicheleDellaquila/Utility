import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ children, className, onClick }) => {
  const style = className ? 'Card ' + className : 'Card';

  return (
    <div className={style} onClick={onClick}>
      {children}
    </div>
  );
};

/* proto types */
Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
