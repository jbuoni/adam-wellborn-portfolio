import React from 'react';
import './CardContainer.css';

import { Card } from '../card';

function CardContainer() {
  return (
    <div className="card-container">
      <Card color='red' />
      <Card color='blue' />
      <Card color='yellow' />
      <Card color='grey' />
      <Card color='green' />
      <Card color='black' />
    </div>
  );
}

export default CardContainer;
