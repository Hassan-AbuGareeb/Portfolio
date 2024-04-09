import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { TypeAnimation } from 'react-type-animation';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Hassan Abu Gareeb</h1>
        <h4 className="text-light"><TypeAnimation
      sequence={[
        'Front-end Developer',
        1000,
        'Back-end Developer',
        1000,
        'Full-stack Developer',
        1000
      ]}
      wrapper="h4"
      speed={40}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    /></h4>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
