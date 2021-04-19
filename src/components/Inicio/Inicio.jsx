import React, { useState } from 'react';
import './Inicio.css';
import Card from '../Card/Card.jsx';
import Switch from '../Switch/Switch';

const Inicio = () => {
  const [plan, setPlan] = useState(false);
  // const cheackPlan = () => {

  // }
  const planMensual = [
    {
      name: 'Basic',
      precio: 19,
      storage: '500 GB Storage',
      users: '2 Users Allowed',
      send: 'Send up to 3GB',
    },
    {
      name: 'Professional',
      precio: 24,
      storage: '1 TB Storage',
      users: '5 Users Allowed',
      send: 'Send up to 10GB',
    },
    {
      name: 'Master',
      precio: 39,
      storage: '2 TB Storage',
      users: '10 Users Allowed',
      send: 'Send up to 20GB',
    },
  ];
  const planAnual = [
    {
      name: 'Basic',
      precio: 199,
      storage: '500 GB Storage',
      users: '2 Users Allowed',
      send: 'Send up to 3GB',
    },
    {
      name: 'Professional',
      precio: 249,
      storage: '1 TB Storage',
      users: '5 Users Allowed',
      send: 'Send up to 10GB',
    },
    {
      name: 'Master',
      precio: 399,
      storage: '2 TB Storage',
      users: '10 Users Allowed',
      send: 'Send up to 20GB',
    },
  ];
  return (
    <div className='inicio'>
      <h1 className='inicio__title'>Our Pricing</h1>
      <Switch setPlan={setPlan} />
      {plan ? (
        <div className='inicio__cards'>
          {planMensual.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              precio={item.precio}
              storage={item.storage}
              users={item.users}
              send={item.send}
            />
          ))}
        </div>
      ) : (
        <div className='inicio__cards'>
          {planAnual.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              precio={item.precio}
              storage={item.storage}
              users={item.users}
              send={item.send}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Inicio;
