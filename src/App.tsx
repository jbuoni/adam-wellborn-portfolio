import React from 'react';
import './App.css';

import { Header } from './components/header';
import { CardContainer } from './components/card-container';
import { Overlay } from './components/overlay';
import ICard from './card-data/icard';

type AppState = {
  isOverlayOpen: boolean;
  currentOverlay?: string;
  childComponentData?: ICard;
}

class App extends React.Component<{}, AppState> {

  constructor(p: {}) {
    super(p);
    this.state = { isOverlayOpen: false }
  }

  private onOverlayClick(cardData?: ICard) {
    this.setState({
      isOverlayOpen: !this.state.isOverlayOpen,
      childComponentData: cardData
    });
  }

  private exitOverlay() {
    this.setState({ isOverlayOpen: false });
  }

  render() {
    const { childComponentData } = this.state;
    return (
      <>
        {
          this.state.isOverlayOpen &&
          <Overlay exitClick={() => this.exitOverlay()} childComponentData={childComponentData} />
        }
        <div className="App">
        <Header aboutClick={(id: string) => this.onOverlayClick()}/>
        <CardContainer onCardClick={ (cardData?: ICard) => this.onOverlayClick(cardData)} />
      </div>
      </>
    );
  }
}

export default App;
