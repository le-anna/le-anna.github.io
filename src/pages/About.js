import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className='about-content'>
          <p className='about-title'>About Me</p>
          <p className='about-description'>
            Hi! My name is Anna Le, and I'm a Computer Science student
            minoring in Mass Communications at the University of Florida.
            My expected graduation date is December 2022.
            <br/><br/>
            After participating in the Women in Computer Science & Engineering
            Shadowing Program, I developed a passion for frontend development. 
            <br/><br/>
            This has lead to my involvement in a few research labs due to my desire to learn more about
            the user and their needs. Currently, I am working as a UX/UI designer and Frontend developer for Choices, a project in the
            Sickle Cell Disease & Traits Lab.
            My work in CaSMM, a project in the Engaging Learning Lab, involves
            improving the existing interface for 5th and 6th grade students to learn how to code Arduinos.
            As these applications are designed for a specific target audience,
            much attention is given to developing optimal UX solutions. I am also a Coordinator in the Peggy Borum 
            Ketogenic Therapy Lab, in which I am creating website content and a style guide for the software.
            <br/><br/> 
            I have taken a UX design course, and I am currently taking a Human-Computer Interaction course to learn more 
            about this area in the field.
            <br/><br/> 
            <strong>Interests:</strong> wireframing, prototyping, style guides, UX design, frontend development
            <br/><br/> 
            <strong>Contact:</strong> annale1501@gmail.com
          </p>
        </div>
    </div>
  );
};

export default About;
