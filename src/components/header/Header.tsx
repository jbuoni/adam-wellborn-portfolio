import React from 'react';
import './Header.less';

function Header() {
  return (
    <div className="header">
      <div className="adam-wellborn">Adam Wellborn</div>
      <div className="right-justified">
        <div className="header-link">About</div>
        <div className="header-link" onClick={onInstagramClick}>Instagram</div>
        <div className="header-link">Linked In</div>
      </div>
    </div>
  );
}

function onInstagramClick(): void {
  const win: any = window.open('https://www.instagram.com/adamwellborn/', '_blank');
  win.focus();
}

export default Header;