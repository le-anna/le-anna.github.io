import React from 'react';
import './About.scss'
import { Link } from 'react-router-dom';
// import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
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
      <div id='about-content'>
        <div id='about-title'>
          <Typewriter 
            options={{
              strings: ['About Me'],
              autoStart: true,
              loop: true,
              deleteSpeed: 6
            }}
            />
        </div>
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
          Shadowing Program in 2020, I developed a passion for frontend development and UX/UI design. 
          This prompted my involvement in a few research labs, because I became interested in understanding how
          research can be used to learn more about the users and their needs. Currently, I am working on the development of
          a website for the Sickle Cell Disease & Traits Lab.
        </p>
        <br/>
        <h3>Personal Portfolio</h3>
        <p>
          I made this portfolio with React and CSS (Sass) to showcase some of my frontend work and UI designs. I was inspired to create a portfolio that 
          highlights my individual experiences - each page mirroring the theme of the project. I also made a page to show the<Link to='/design' id='nested-link'>UI Designs</Link> that I made for fun! 
          
          <a href='https://github.com/le-anna/portfolio' id='nested-link'>-> Here's my Github for the portfolio!</a>  
        </p>
        <br/>
        <h3>Current technologies!</h3>
        <p> 
          JavaScript, C++, Java, HTML, CSS (preprocessors Sass and Less)
          <br/>
          React, React Native, Figma
          <br/><br/><br/>
        </p>
        <div className='container row' id='about-btn-container'>
          {/* <a href={Resume} target = "_blank" rel="noreferrer" className='button' id='about-btn'>
            <FontAwesomeIcon icon={faFilePdf}/>
            <p>Resume</p>
          </a> */}
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
