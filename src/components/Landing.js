import React from 'react';
import './Landing.scss';
import LandingPhoto from '../assets/landing.png';
import { FaChevronDown } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import '../pages/Home.js'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs


const Landing = () => {

  return (
    <div className='container column' id='landing'>
        <div id='info-container'>
            <div id='landing-img-container'>
              <img src={LandingPhoto} id='photo' alt='Landing Character'/>
            </div>
            <div id='description'>
              <span id='opening'>
                <strong> anna is typing 👩🏻‍💻 </strong>
                <FontAwesomeIcon id='msg-icon' icon={faCommentDots}/>
              </span>
              <Typewriter
                options={{
                  strings: ['welcome to my portfolio :)', 'i\'m anna!', 'i\'m a computer science student', 'i\'m also minoring in mass communications',
                  'i enjoy frontend development and ux/ui design!'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 6
                }}
              />
            </div>
          
        </div>
        <div id='down-icon'><FaChevronDown/></div>
    </div>
  );
};

export default Landing;
