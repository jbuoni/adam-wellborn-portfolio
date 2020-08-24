import React from 'react';
import './CardOverlay.css';
import ICard from '../../card-data/icard';

type CardProps = {
  cardData: ICard
}
function CardOverlay({ cardData }: CardProps) {
  return (
    <div className="card-container">
      <h1>{cardData.descripion}</h1>
    </div>
  );
}

export default CardOverlay;

