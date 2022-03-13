import React from 'react';
import './Landing.scss';
import StarSvg from '../assets/stars.svg';
import Drawing from '../assets/drawing.PNG'
import { FaChevronDown } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import '../pages/Home.js'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs


const Landing = () => {

  return (
    <div className='container column' id='landing'>
        <div id='info-container'>
            <div id='description'>
              <span>
              <strong> anna is typing </strong>
                <FontAwesomeIcon id='msg-icon' icon={faCommentDots}/>
              </span>
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
            <div id='landing-img-container'>
              <img src={Drawing} id='photo'/>
              <img src={StarSvg} id='stars'/>
            </div>
        </div>
        <div id='down-icon'><FaChevronDown/></div>
    </div>
  );
};

export default Landing;
