import React from 'react';
import './CardContainer.css';

import { Card } from '../card';

//TODO Temp
import cardData from '../../card-data/card-data';
import ICard from '../../card-data/icard';

type CardContainerProps = {
  onCardClick: Function
};

function CardContainer({ onCardClick }: CardContainerProps) {
  return (
    <div className="card-container">
      { cardData.map((data: ICard) => <Card onCardClick={onCardClick} cardData={data} />)}
    </div>
  );
}

export default CardContainer;
