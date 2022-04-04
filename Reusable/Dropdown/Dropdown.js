import React from 'react';
import './Dropdown.css';
import DropdownItem from './DropdownItem/DropdownItem';
import PropTypes from 'prop-types';

const Dropdown = ({ list, icon, onSelect, onClose, animation }) => {
  const firstItem = React.createRef();

  // select item
  const selectItemHandler = (item) => {
    onSelect(item);
    onClose();
  };

  return (
    <div className={`Dropdown Dropdown--${animation}`}>
      <ul>
        {icon &&
          list.map((option, index) => {
            return (
              <DropdownItem
                key={index}
                ref={firstItem}
                title={option.title}
                icon={option.icon}
                onItemSelect={selectItemHandler}
              />
            );
          })}
        {!icon &&
          list.map((option, index) => {
            return (
              <DropdownItem
                key={index}
                ref={firstItem}
                title={option.title}
                onItemSelect={selectItemHandler}
              />
            );
          })}
      </ul>
    </div>
  );
};

/* proto types */
Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  icon: PropTypes.bool,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  animation: PropTypes.string.isRequired,
};

export default Dropdown;
