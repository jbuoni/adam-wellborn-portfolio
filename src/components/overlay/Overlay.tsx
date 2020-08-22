import React from 'react';
import './Overlay.css';
import { AboutOverlay } from '../about-overlay';
import ICard from '../../card-data/icard';
import { CardOverlay } from '../card-overlay';
import cardData from '../../card-data/card-data';

//Not Typescript
const Fade = require('react-reveal/Fade');

type OverlayProps = {
  exitClick: Function
  childComponentData?: ICard
};

type OverlayInnerComponentProps = {
  cardData?: ICard
};

function Overlay({ exitClick, childComponentData }: OverlayProps) {
  const title = childComponentData && childComponentData.name || 'About';
  return (
    <div className="overlay-container">
      <div className="overlay-opacity"></div>
      <Fade right>
        <div className="overlay-content">
          <div className="top-component">
            <div className="overlay-title">{title}</div>
            <div onClick={() => exitClick()} className="exit-container"><i className="fas fa-times exit-overlay"></i></div>
          </div>
          < OverlayInnerComponent cardData={childComponentData} />
        </div>
      </Fade>
    </div>
  );
}

function OverlayInnerComponent({ cardData } : OverlayInnerComponentProps) {
  return cardData && <CardOverlay /> || <AboutOverlay />
}

export default Overlay;
