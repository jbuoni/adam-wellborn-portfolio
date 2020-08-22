import ICard from "./icard";

// Images
import lbMain from '../images/lbf1.png';
import lbHover from '../images/lbf2.png';
import aMain from '../images/angular1.png';
import aHover from '../images/angular2.png';
import mlMain from '../images/mosaic1.png';
import mlHover from '../images/mosaic2.png';
import mMain from '../images/exp1.png';
import mHover from '../images/bbpplot.png';

const cardData: ICard[] = [
  {
    id: 'lbf',
    name: 'Farm',
    cardImage: lbMain,
    cardHoverImage: lbHover
  },
  {
    id: 'angular',
    name: 'Angular',
    cardImage: aMain,
    cardHoverImage: aHover
  },
  {
    id: 'ml',
    name: 'Strategy Learner',
    cardImage: mlMain,
    cardHoverImage: mlHover
  },
  {
    id: 'moasic',
    name: 'Mosaic Python',
    cardImage: mMain,
    cardHoverImage: mHover
  },
  {
    id: 'lbf',
    name: 'Farm',
    cardImage: lbMain,
    cardHoverImage: lbHover
  },
  {
    id: 'angular',
    name: 'Angular',
    cardImage: aMain,
    cardHoverImage: aHover
  }
]

export default cardData;