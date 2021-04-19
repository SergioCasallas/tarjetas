import React from 'react';
import './Switch.css';

const Switch = ({ setPlan }) => {
  const active = (e) => {
    if (e.target.checked === true) {
      setPlan(true);
    } else if (e.target.checked === false) {
      setPlan(false);
    }
  };
  return (
    <div className='switch-content'>
      <span className='switch-text'>Annually</span>
      <label className='switch'>
        <input onClick={active} className='checkbox' type='checkbox' />
        <span className='slider'></span>
      </label>
      <span className='switch-text'>Monthly</span>
    </div>
  );
};

export default Switch;
