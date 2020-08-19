import React, { CSSProperties } from 'react';
import './Card.css';

type CardProps = {
  color: string
};

function Card({ color }: CardProps) {
  const style:any = {
    'background-color': color
  };
  return (
    <div className="card" style={style}></div>
  );
}

export default Card;
