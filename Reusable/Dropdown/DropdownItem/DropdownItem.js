import React from 'react';
import './DropdownItem.css';
import PropTypes from 'prop-types';

const DropdownItem = React.forwardRef((props, ref) => {
  // console.log(ref);

  return (
    <li ref={ref} className='DropdownItem' onClick={() => props.onItemSelect(props.title)}>
      {props.icon && (
        <div className='DropdownItem__box'>
          {props.icon}
          <p className='DropdownItem__box-title'>{props.title}</p>
        </div>
      )}
      {!props.icon && <p className='DropdownItem__title'>{props.title}</p>}
    </li>
  );
});

/* proto types */
DropdownItem.propTypes = {
  onItemSelect: PropTypes.func.isRequired,
  icon: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default DropdownItem;
