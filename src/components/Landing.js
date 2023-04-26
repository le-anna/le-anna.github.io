import { React, useState } from 'react';
import './Landing.scss';
import { FaChevronDown } from 'react-icons/fa';
import '../pages/Home.js';
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const Landing = () => {
  const [message, setMessage] = useState();
  const showMessage = () => {
    setMessage(true);
  };
  return (
    <div className='container column' id='landing'>
      <div className='flex column' id='landing-intro'>
        <h1 id='landing-title'>Anna Le</h1>
        <h2>Front-end Developer & UI Designer</h2>
      </div>
      <div id='landing-content'>
        <span id='opening'>
          <span id='msg-title'>anna is typing 👩🏻‍💻</span>
          <span id='msg-icon'>💬</span>
        </span>
        <Typewriter
          options={{
            strings: ['welcome :)', "i'm enthusiastic about development and ux/ui design!"],
            autoStart: true,
            loop: true,
            delay: 60,
            deleteSpeed: 6,
          }}
        />
      </div>
      <div></div>
      <div id='down-icon'>
        <FaChevronDown />
      </div>
    </div>
  );
};

export default Landing;
