import React from 'react';
import './CardContainer.css';

import { Card } from '../card';

type CardContainerProps = {
  onCardClick: Function
};

function CardContainer({ onCardClick }: CardContainerProps) {
  return (
    <div className="card-container">
      <Card color='red' onCardClick={onCardClick} />
      <Card color='blue' onCardClick={onCardClick} />
      <Card color='yellow' onCardClick={onCardClick} />
      <Card color='grey' onCardClick={onCardClick} />
      <Card color='green' onCardClick={onCardClick} />
      <Card color='black' onCardClick={onCardClick} />
    </div>
  );
}

export default CardContainer;
