import React from 'react';
import './Card.css';

const Card = ({ name, precio, storage, users, send }) => {
  return (
    <div className='card'>
      <span className='card-name'>{name}</span>
      <span className='card-precio'>{precio}</span>
      <span className='card-storage'>{storage}</span>
      <span className='card-users'>{users}</span>
      <span className='card-send'>{send}</span>
      <button className='card-btn'>Learn more</button>
    </div>
  );
};

export default Card;
