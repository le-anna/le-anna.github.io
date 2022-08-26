import React from 'react';
import './About.scss'
import { Link } from 'react-router-dom';
// import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { TbMathSymbols } from 'react-icons/tb'; 
import { FiSettings } from 'react-icons/fi'; 
import { FaLaptopCode, FaRegUser } from 'react-icons/fa'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { BiCodeAlt, BiData, BiCodeCurly } from 'react-icons/bi'; 
import { SiMatrix } from 'react-icons/si';
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const About = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a className='container column clickable' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

  return (
    <div id='about'>
      <div className='flex column' id='about-content'>
        <h2 id='about-title'>
          <Typewriter 
            options={{
              strings: ['About Me'],
              autoStart: true,
              loop: true,
              deleteSpeed: 6
            }}
            />
        </h2>
        <br/>
        <h3>Introduction</h3>
        <p>
          Hi! My name is Anna. I'm a Computer Science student
          minoring in Mass Communications at the University of Florida with a graduation date in December 2022. 
        </p>
        <br/>
        <p>
          After participating in the Women in Computer Science & Engineering (WiCSE)
          Shadowing Program, I gained excitement for frontend development and UX/UI design. 
          This prompted my involvement in a few research labs, because I became interested in learning more about developing apps
          for users with regard to their needs. 
        </p>
        <br/>
        <h3>Portfolio</h3>
        <p>
          I made this portfolio with React and CSS (Sass) to showcase some of my frontend work and UI designs. I was inspired to create a portfolio that 
          highlights my individual experiences - each page mirroring the theme of the project. I also made a page to show the <Link to='/design' className='nested-link'>UI Designs</Link> that I made for fun. 
        </p>
        <br/>
        <p id='highlight'>⭐️ While creating this portfolio, I focused on these aspects:</p>
        <p>
          [1] Creating a responsive application for both mobile and desktop views<br/>
          [2] Simplifying the CSS by making a global stylesheet to reuse properties and reduce repetitiveness<br/><br/>
          <a href='https://github.com/le-anna/portfolio' className='nested-link'>   -> Here's my Github for the portfolio!</a>  
        </p>
        <br/>
        <h3>Current tech</h3>
        <p> 
          JavaScript, C++, Java, Python, HTML, CSS/CSS Preprocessors (Sass, Less)
          <br/>
          React, React Native, Figma
          <br/><br/><br/>
        </p>
        <h3>Links</h3>
        <div className='container row tech'>
          <a href='https://github.com/le-anna/portfolio' className='container column clickable'>
            <div className='container icon-container'><FontAwesomeIcon className='icon' icon={faGithub}/></div>
            <div className='container label-container'>
              <p>Github</p>
            </div>
          </a>
          <Mailto email='annale1501@gmail.com' subject='' body=''>
            <div className='container icon-container'><FontAwesomeIcon className='icon' icon={faEnvelope}/></div>
            <div className='container label-container'>
              <p>Email</p>
            </div>
          </Mailto>
          <a href='https://linkedin.com/in/anna-le-7130181ba' className='container column clickable'>
            <div className='container icon-container'><FontAwesomeIcon className='icon' icon={faLinkedin}/></div>
            <div className='container label-container'>
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
        <h3>Relevant Courses</h3>
        <div className='container row tech'>
            <div className='container column tech-item'>
              <div className='container icon-container'><FaLaptopCode className='icon'/></div>
              <div className='container label-container'>
                <p>UX Design</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><FaRegUser className='icon'/></div>
              <div className='container label-container'>
                <p>Human-Computer Interaction</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><BiCodeCurly className='icon'/></div>
              <div className='container label-container'>
                <p>Intro to Software Engineering</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><FiSettings className='icon'/></div>
              <div className='container label-container'>
                <p>Operating Systems</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><GiArtificialIntelligence className='icon'/></div>
              <div className='container label-container'>
                <p>Applied Machine Learning</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><BiCodeAlt className='icon'/></div>
              <div className='container label-container'>
                <p>Programming 1 & 2</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><BiData className='icon'/></div>
              <div className='container label-container'>
                <p>Data Structures</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><TbMathSymbols className='icon'/></div>
              <div className='container label-container'>
                <p>Discrete Mathematics</p>
              </div>
            </div>
            <div className='container column tech-item'>
              <div className='container icon-container'><SiMatrix className='icon'/></div>
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
