import React from 'react';
import './App.css';

import { Header } from './components/header';
import { CardContainer } from './components/card-container';
import { Overlay } from './components/overlay';

interface AppState {
  isOverlayOpen: boolean;
  currentOverlay?: string;
}

class App extends React.Component<{}, AppState> {

  constructor(p: {}) {
    super(p);
    this.state = { isOverlayOpen: false }
  }

  onOverlayClick() {
    this.setState({ isOverlayOpen: !this.state.isOverlayOpen });
  }

  render() {
    return (
      <>
        {
          this.state.isOverlayOpen &&
          <Overlay exitClick={() => this.onOverlayClick()}/>
        }
        <div className="App">
        <Header />
        <CardContainer onCardClick={() => this.onOverlayClick()} />
      </div>
      </>
    );
  }
}

export default App;
