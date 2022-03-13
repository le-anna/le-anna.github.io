import React from 'react';
import './About.scss'
import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const About = () => {

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a className='about-btn' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }


  return (
    <div className='about'>
        <div className='about-content'>
          <div className='about-title'>
           <Typewriter 
              options={{
                strings: ['About Me'],
                autoStart: true,
                loop: true,
                deleteSpeed: 6
              }}
              />
          </div>
          <p className='about-description'>
            Hi! My name is Anna, and I'm a Computer Science student
            minoring in Mass Communications at the University of Florida.
            My expected graduation date is December 2022. I made this portfolio with React.JS and CSS (SASS) to showcase some of my work!
            <br/><br/>
            After participating in the Women in Computer Science & Engineering
            Shadowing Program, I developed a passion for creating frontend solutions. 
            <br/><br/>
            This has lead to my involvement in a few research labs, as I am interested in understanding how
            research can be used to learn more about the users and their needs. 
            <br/><br></br>
          </p>
          <div className='container row' id='about-btn-container'>
            <a href = {Resume} target = "_blank" className='about-btn'>
              <FontAwesomeIcon icon={faFilePdf}/>
              <p>Resume</p>
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
