import React from 'react';
import './About.css'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const About = () => {

  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
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
            My expected graduation date is December 2022.
            <br/><br/>
            After participating in the Women in Computer Science & Engineering
            Shadowing Program, I developed a passion for developing frontend solutions. 
            <br/><br/>
            This has lead to my involvement in a few research labs, as I am interested in understanding how
            research can be used to learn more about the users and their needs. 
            As of current, I am working as a UX/UI designer and frontend developer for Choices, a project in the
            Sickle Cell Disease & Traits Lab.
            My work in CaSMM, a project in the Engaging Learning Lab, involves
            improving the existing interface for 5th and 6th grade students to learn how to code Arduinos.
            As these applications are designed for a specific target audience,
            much attention is given to developing optimal UX solutions. I am also a Coordinator in the Peggy Borum 
            Ketogenic Therapy Lab, in which I am creating website content and a style guide for the software.
            <br/><br/> 
            <strong>Relevant courses:</strong> UX Design and Human-Computer Interaction (in progress)
            <br/><br/> 
            <strong>Interests:</strong> wireframing, prototyping, style guides, UX design, frontend development
            <br/><br/> 
            <strong>Contact:</strong> annale1501@gmail.com
          </p>

          <Mailto email='annale1501@gmail.com' subject="Hello" body="Hello world!">
    Mail me!
  </Mailto>,
        </div>
    </div>
  );
};

export default About;
