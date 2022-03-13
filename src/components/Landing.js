import React from 'react';
import './Landing.scss';
import StarSvg from '../assets/stars.svg';
import Drawing from '../assets/drawing.PNG'
import { FaChevronDown } from 'react-icons/fa';
import '../pages/Home.js'

const Landing = () => {

  return (
    <div className='landing'>
        <div className='info-container'>
            <div className='description'>
              <strong>hi! my name is anna.</strong>
              <div id='description-animation'>
                <p className='typed-out'>i'm a computer science student.</p>
              </div>
            </div>
            <div className='landing-image-container'>
              <img src={Drawing} className='photo'/>
              <img src={StarSvg} className='stars'/>
            </div>
        </div>
        <div id='down-icon'><FaChevronDown/></div>
    </div>
  );
};

export default Landing;
