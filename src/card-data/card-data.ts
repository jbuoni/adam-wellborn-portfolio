import ICard from './icard';

// Images
import cutsew from '../images/cards/Cutsew.jpg';
import cutsewHover from '../images/cards/Cutsew-RO.jpg';
import hgd from '../images/cards/HGD-Law.jpg';
import hgdHover from '../images/cards/HGD-Law-RO.jpg';
import atlLaser from '../images/cards/Atl-Laser2.jpg';
import atlLaserHover from '../images/cards/Atl-Laser-RO.jpg';
import illustration from '../images/cards/Illustration2.jpg';
import illustrationHover from '../images/cards/Illustration2-RO.jpg';
import logos from '../images/cards/Logos.jpg';
import logosHover from '../images/cards/Logos-RO.jpg';
import video from '../images/cards/Video.jpg';
import videoHover from '../images/cards/Video-RO.jpg';

const cardData: ICard[] = [
  {
    id: 'cutset',
    name: 'Cut Sew',
    cardImage: cutsew,
    cardHoverImage: cutsewHover,
    descripion: 'Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.'
  },
  {
    id: 'hgd',
    name: 'HGD Law',
    cardImage: hgd,
    cardHoverImage: hgdHover,
    descripion: 'Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.'
  },
  {
    id: 'atlLaser',
    name: 'Atlanta Laser',
    cardImage: atlLaser,
    cardHoverImage: atlLaserHover,
    descripion: 'Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.'
  },
  {
    id: 'illustration',
    name: 'Illustrations',
    cardImage: illustration,
    cardHoverImage: illustrationHover,
    descripion: 'Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.'
  },
  {
    id: 'logos',
    name: 'Logos',
    cardImage: logos,
    cardHoverImage: logosHover,
    descripion: 'Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.'
  },
  {
    id: 'videos',
    name: 'Videos',
    cardImage: video,
    cardHoverImage: videoHover,
    descripion: 'Side project of mine. I am in the progress of redoing my parents farm website. It requires a backend and a UI which will allow for someone not techy to update it easily.'
  }
]

export default cardData;