import React from 'react';
import './About.scss'
import { Link } from 'react-router-dom';
// import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const About = () => {
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a className='button' id='about-btn' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
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
        <h3>Motivation</h3>
        <p>
          After participating in the Women in Computer Science & Engineering (WiCSE)
          Shadowing Program, I developed a passion for frontend development and UX/UI design. 
          This prompted my involvement in a few research labs, because I became interested in learning more about developing apps
          for users with regard to their needs. Currently, I am working on the development of
          a website for the Sickle Cell Disease & Traits Lab.
        </p>
        <br/>
        <h3>Portfolio</h3>
        <p>
          I made this portfolio with React and CSS (Sass) to showcase some of my frontend work and UI designs. I was inspired to create a portfolio that 
          highlights my individual experiences - each page mirroring the theme of the project. I also made a page to show the<Link to='/design' className='nested-link'>UI Designs</Link> that I made for fun. <a href='https://github.com/le-anna/portfolio' className='nested-link'>   -> Here's my Github for the portfolio!</a>  
        </p>
        <br/>
        <h3>Current tech</h3>
        <p> 
          JavaScript, TypeScript, C++, Java, HTML, CSS (Sass and Less)
          <br/>
          React, React Native, Figma
          <br/><br/><br/>
        </p>
        <div className='container row' id='about-btn-container'>
          {/* <a href={Resume} target = "_blank" rel="noreferrer" className='button' id='about-btn'>
            <FontAwesomeIcon icon={faFilePdf}/>
            <p>Resume</p>
          </a> */}
          <a href='https://github.com/le-anna/portfolio' className='button' id='about-btn'>
            <FontAwesomeIcon icon={faGithub}/>
            <p>Github</p>
          </a>
          <a href='https://linkedin.com/in/anna-le-7130181ba' className='button' id='about-btn'>
            <FontAwesomeIcon icon={faLinkedin}/>
            <p>LinkedIn</p>
          </a>
          <Mailto email='annale1501@gmail.com' subject='' body=''>
            <FontAwesomeIcon icon={faEnvelope}/>
            <p>Email</p>
          </Mailto>
        </div>
      </div>
   </div>
  );
};

export default About;
