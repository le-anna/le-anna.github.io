import React from 'react';
import './About.scss'
import Resume from '../assets/Anna Le Resume (Spring 2022).pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import Typewriter from 'typewriter-effect';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
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
            Hi! My name is Anna. I'm a Computer Science student
            minoring in Mass Communications at the University of Florida with a plan to graduate in December 2022. 
            I believe that mass communication plays a prominent role in today's
            digital age. As such, I decided to a pursue a minor in Mass Communiations along with my Computer Science degree.
            <br/><br/>
            After participating in the Women in Computer Science & Engineering (WiCSE)
            Shadowing Program in 2020, I developed a passion for frontend development and UX design. 
            This has prompted my involvement in a few research labs, as I am interested in understanding how
            research can be used to learn more about the users and their needs. Currently, I am working on the development of
            a website for the Sickle Cell Disease & Traits Lab.
            <br/><br/>
            I made this portfolio with React and CSS (Sass) to showcase some of my frontend work.
            <a href='https://github.com/le-anna/portfolio' id='nested-link'>
              Here's my Github for the portfolio!
            </a>
              <br/><br/>
             <p><strong>Technologies that I have been working with:</strong></p>
              JavaScript, TypeScript, C++, Java, HTML, CSS (preprocessors Sass and Less)
              <br/>
              React, React Native, Figma
            <br/><br></br>
          </p>
          <div className='container row' id='about-btn-container'>
            <a href={Resume} target = "_blank" rel="noreferrer" class='button' id='about-btn'>
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
