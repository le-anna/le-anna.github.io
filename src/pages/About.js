import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';
// import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { TbMathSymbols } from 'react-icons/tb';
import { FiSettings } from 'react-icons/fi';
import { FaLaptopCode, FaRegUser } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BiCodeAlt, BiData, BiCodeCurly } from 'react-icons/bi';
import { SiMatrix } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
import MyPicture from '../assets/landing.png';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const About = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a
        className='container column clickable'
        href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
      >
        {props.children}
      </a>
    );
  }

  return (
    <div id='about'>
      <div className='grid row about-opener'>
        <img src={MyPicture} id='about-photo' />
        <div id='intro-title'>
          <h1>Hi there! My name is Anna.</h1>
          <h2>Computer Science major & Mass Communications minor @University of Florida 🐊</h2>
        </div>
      </div>
      <div id='about-description'>
        <h2 id='about-title'>
          <Typewriter
            options={{
              strings: ['About Me'],
              autoStart: true,
              loop: true,
              deleteSpeed: 6,
            }}
          />
        </h2>
        <br />
        <p>
          I recently graduated from the University of Florida (2022) with a B.S. in Computer
          Science! I'm enthusiastic about development and design, and I made this portfolio using
          <strong> React and CSS (Sass)</strong> with the goal of showing some of my front-end work
          & UI Designs.
          <a href='https://github.com/le-anna/portfolio' className='nested-link'>
            Here
          </a>{' '}
          is the Github for my portfolio if you're interested! I am constantly pursuing new
          opportunities to learn and expand upon my skills, and I enjoy taking up new challenges and
          side projects!
        </p>
        <p>
          Aside from developing and designing, I love cooking and I spend <em>way</em> too much time
          perusing for new food places on Yelp! And, as a <em>serious</em> part-time hobby, I take
          many pictures of my dog—you'll find that my camera roll is 95% dog pictures!
        </p>
        <p>Please feel free to contact me anytime @ le.anna.ngy@gmail.com</p>
      </div>
      <div className='flex column' id='about-content'>
        <h3>My Links</h3>
        <div className='container row tech'>
          <a href='https://github.com/le-anna/portfolio' className='container column clickable'>
            <div className='container icon-container'>
              <FontAwesomeIcon className='icon' icon={faGithub} />
            </div>
            <div className='container label-container'>
              <p>Github</p>
            </div>
          </a>
          <Mailto email='le.anna.ngy@gmail.com' subject='' body=''>
            <div className='container icon-container'>
              <FontAwesomeIcon className='icon' icon={faEnvelope} />
            </div>
            <div className='container label-container'>
              <p>Email</p>
            </div>
          </Mailto>
          <a
            href='https://linkedin.com/in/anna-le-7130181ba'
            className='container column clickable'
          >
            <div className='container icon-container'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </div>
            <div className='container label-container'>
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
        <h3>Relevant Courses</h3>
        <div className='container row tech'>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <FaLaptopCode className='icon' />
            </div>
            <div className='container label-container'>
              <p>UX Design</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <FaRegUser className='icon' />
            </div>
            <div className='container label-container'>
              <p>Human-Computer Interaction</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <BiCodeCurly className='icon' />
            </div>
            <div className='container label-container'>
              <p>Intro to Software Engineering</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <FiSettings className='icon' />
            </div>
            <div className='container label-container'>
              <p>Operating Systems</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <GiArtificialIntelligence className='icon' />
            </div>
            <div className='container label-container'>
              <p>Applied Machine Learning</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <BiCodeAlt className='icon' />
            </div>
            <div className='container label-container'>
              <p>Programming 1 & 2</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <BiData className='icon' />
            </div>
            <div className='container label-container'>
              <p>Data Structures</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <TbMathSymbols className='icon' />
            </div>
            <div className='container label-container'>
              <p>Discrete Mathematics</p>
            </div>
          </div>
          <div className='container column tech-item'>
            <div className='container icon-container'>
              <SiMatrix className='icon' />
            </div>
            <div className='container label-container'>
              <p>Linear Algebra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
