import React from 'react';

const task = (value, index) => {
  return (
    <li key={index}>{value}</li>
  );
}

export default task;