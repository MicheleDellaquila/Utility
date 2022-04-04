import React from 'react';
import './Drawer.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PropTypes from 'prop-types';

const Drawer = ({ title, list, onSelect, onClose, animation }) => {
  // item choiced
  const itemChoiced = (item) => {
    onSelect(item);
    onClose();
  };

  return (
    <div className='Drawer--backdrop'>
      <aside className={`Drawer Drawer--${animation}`}>
        <h2 className='Drawer__title'>{title}</h2>
        <ul className='Drawer__list'>
          {list.map((item, index) => {
            return (
              <li key={index} className='Drawer__list-item' onClick={() => itemChoiced(item)}>
                {item}
              </li>
            );
          })}
        </ul>
        <span className='Drawer__box' onClick={onClose}>
          <ArrowBackIosIcon className='Drawer__box-icon' />
        </span>
      </aside>
    </div>
  );
};

/* proto types */
Drawer.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  animation: PropTypes.string.isRequired,
};

export default Drawer;
