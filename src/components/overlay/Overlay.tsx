import React from 'react';
import './Overlay.css';

type OverlayProps = {
  exitClick: Function
};

function Overlay({ exitClick }:OverlayProps) {
  return (
    <div className="overlay-container">
      <div className="overlay-opacity"></div>
      <div className="overlay-content">
        <div onClick={() => exitClick()}><i className="fas fa-times exit-overlay"></i></div>
      </div>
    </div>
  );
}

export default Overlay;
