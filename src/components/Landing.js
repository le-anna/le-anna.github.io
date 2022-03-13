import React from 'react';
import './Landing.scss';
import StarSvg from '../assets/stars.svg';
import Drawing from '../assets/drawing.PNG'
import { FaChevronDown } from 'react-icons/fa';
import '../pages/Home.js'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs


const Landing = () => {

  return (
    <div className='landing'>
        <div className='info-container'>
            <div className='description'>
              <strong>incoming messages:</strong>
              <Typewriter
                options={{
                  strings: ['hi! my name is anna', 'i\'m a computer science student', 'i\'m also minoring in mass communications',
                 , 'i\'m interested in frontend development and ux/ui design!'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 6
                }}
              />
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
