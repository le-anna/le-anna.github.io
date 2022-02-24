import React from 'react';
import './Landing.css';
import StarSvg from '../assets/stars.svg';
import Drawing from '../assets/drawing.png'

const Landing = () => {

  return (
    <div className='landing'>
        <div className='info-container'>
            <p className='description'>Hi! My name is Anna Le, and I'm a Computer Science student minoring in 
            Mass Communications. I made this portfolio with React.js and CSS (SASS) to show some of my work.</p>
            <div className='image-container'>
              <img src={StarSvg} className='stars'/>
              <img src={Drawing} className='photo'/>
            </div>
        </div>
    </div>
  );
};

export default Landing;
