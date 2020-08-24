import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

type HeaderProps = {
  aboutClick: Function
};

type HeaderState = {
  displayCompressed: boolean
};


function onInstagramClick(): void {
  const win: any = window.open('https://www.instagram.com/adamwellborn/', '_blank');
  win.focus();
}

function onLinkedInClick(): void {
  const win: any = window.open('https://www.linkedin.com/in/adamwellborn/', '_blank');
  win.focus();
}

function onFacebookClick(): void {
  const win: any = window.open('https://www.facebook.com/adamwellborn', '_blank');
  win.focus();
}

function onEmailButtonClick(): void {
  const link = 'https://mail.google.com/mail/?view=cm&fs=1&to=adam.wellborn@gmail.com';
  window.open(link, 'Mailer');
}

function CompressedHeader({ aboutClick }: HeaderProps) {
  return (
    <div className="header header-compressed sticky">
      <div className="adam-wellborn compressed-a-w">Adam Wellborn</div>
      <div className="header-right header-right-compressed">
        <div className="header-link" onClick={() => aboutClick()}><i className="fas fa-book-dead"></i></div>
        <div className="header-link" onClick={() => onInstagramClick()}><i className="fab fa-instagram"></i></div>
        <div className="header-link" onClick={() => onLinkedInClick()}><i className="fab fa-linkedin-in"></i></div>
        <div className="header-link" onClick={() => onFacebookClick()}><i className="fab fa-facebook"></i></div>
        <div className="header-link" onClick={() => onEmailButtonClick()}><i className="far fa-envelope-open"></i></div>
      </div>
    </div>
  );
}

function FullHeader({ aboutClick }: HeaderProps) {
  return (
    <div className="header header-full sticky">
      <div className="header-left" >
        <img  className="header-logo" src={logo} alt="logo" />
        <div className="adam-wellborn">Marketing & GRFX</div>
      </div>
      <div className="header-right">
        <div className="header-link" onClick={() => aboutClick()}>About</div>
        <div className="header-link" onClick={() => onInstagramClick()}>Instagram</div>
        <div className="header-link" onClick={() => onLinkedInClick()}>Linked In</div>
        <div className="header-link" onClick={() => onFacebookClick()}>Facebook</div>
        <div className="header-link" onClick={() => onEmailButtonClick()}>Contact</div>
      </div>
    </div>
  );
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      displayCompressed: false
    };
  }

  listenScrollEvent = () => {
    const { displayCompressed } = this.state;

    if(displayCompressed || !displayCompressed && window.scrollY >= 150)
      this.setState({
        displayCompressed: window.scrollY >= 100
      });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const { aboutClick } = this.props;
    const { displayCompressed } = this.state;
    return displayCompressed ?
      <CompressedHeader aboutClick={aboutClick} /> :
      <FullHeader aboutClick={aboutClick} />;
  }
}
export default Header;
