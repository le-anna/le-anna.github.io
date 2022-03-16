import React from 'react';
import './About.scss'
import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons' 
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const About = () => {

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a class='button' id='about-btn' href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
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
          <p id='about-description'>
            Hi! My name is Anna, and I'm a Computer Science student
            minoring in Mass Communications at the University of Florida.
            My expected graduation date is December 2022. <br/><br/>
            I made this portfolio with React.JS and CSS (SASS) to showcase some of my work!
            <br/><br/>
              <a href='https://github.com/le-anna/portfolio' id='nested-link'>
                Click here to view the Github for my portfolio. 
              </a>
            <br/><br/>
            After participating in the Women in Computer Science & Engineering
            Shadowing Program, I developed a passion for creating frontend solutions. 
            This has lead to my involvement in a few research labs, as I am interested in understanding how
            research can be used to learn more about the users and their needs. 
            <br/><br></br>
          </p>
          <div className='container row' id='about-btn-container'>
            <a href={Resume} target = "_blank" class='button' id='about-btn'>
              <FontAwesomeIcon icon={faFilePdf}/>
              <p>Resume</p>
            </a>
            <a href='https://linkedin.com/in/anna-le-7130181ba' class='button' id='about-btn'>
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
