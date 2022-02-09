import React from 'react';
import './Landing.css';
import StarSvg from '../assets/stars.svg';
import Drawing from '../assets/drawing.PNG'

const Landing = () => {

  return (
    <div className='landing'>
        <div className='info-container'>
            <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='image-container'>
              <img src={StarSvg} className='stars'/>
              <img src={Drawing} className='photo'/>
            </div>
        </div>
    </div>
  );
};

export default Landing;
