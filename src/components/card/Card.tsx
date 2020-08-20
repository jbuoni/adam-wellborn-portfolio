import React from 'react';
import './Card.css';

type CardProps = {
  color: string,
  onCardClick: Function
};

function Card({ color, onCardClick }: CardProps) {
  const style:any = {
    backgroundColor: color
  };
  return (
    <div className="card" style={style} onClick={() => onCardClick()}></div>
  );
}

export default Card;
