import React from 'react';
import './Landing.scss';
import StarSvg from '../assets/stars.svg';
import Drawing from '../assets/drawing.PNG'

const Landing = () => {

  return (
    <div className='landing'>
        <div className='info-container'>
            <div className='description'>Hi! My name is Anna Le, and I'm a Computer Science student minoring in 
            Mass Communications. I made this portfolio with React.js and CSS (SASS) to show some of my work.</div>
            <div className='landing-image-container'>
              <img src={Drawing} className='photo'/>
              <img src={StarSvg} className='stars'/>
            </div>
        </div>
    </div>
  );
};

export default Landing;
