import React from 'react';
import './Card.css';
import ICard from '../../card-data/icard';

type CardState = {
  hovering: boolean;
}

type CardProps = {
  onCardClick: Function,
  cardData: ICard
};
class Card extends React.Component<CardProps, CardState>{

  constructor(cardProps: CardProps) {
    super(cardProps);
    this.state = {
      hovering: false
    };
  }

  render() {
    const { cardData } = this.props;

    const {
      cardHoverImage,
      cardImage,
      id,
      name
    } = cardData;

    const style:any = {
      // background: `${
      //   this.state.hovering ?
      //   `linear-gradient(
      //     rgba(0, 0, 0, 0.5),
      //     rgba(0, 0, 0, 0.5)
      //   ),` : ''
      //   }
      //   url(${this.state.hovering ? cardHoverImage : cardImage})
      // `
      backgroundImage: `url(${this.state.hovering ? cardHoverImage : cardImage})`
    }

    return (
      <div
        className="card" style={style}
        onClick={() => this.onCardClick()}
        onMouseEnter={() => this.onHover(true)}
        onMouseLeave={() => this.onHover(false)}
      >
        {
          this.state.hovering &&
          <div className="card-name">{name}</div>
        }

      </div>
    );
  }

  private onHover(hovering: boolean) {
    this.setState({ hovering });
  }

  private onCardClick() {
    const { cardData, onCardClick } = this.props;
    onCardClick(cardData);
  }
}

export default Card;
