import React from 'react';
import { Link } from 'react-router-dom';
import './Design.scss';
import GoToTop from '../components/GoToTop';
import PawMatesProto from '../assets/Designs/PawMatesProto.png';
import CreateAccount from '../assets/Designs/CreateAccount.gif';
import Wireframe from '../assets/Designs/Wireframe.png';
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const Design = () => {
  return (
    <div className='container column' id='design'>
      <h2 className='flex column'>
        <Typewriter
          options={{
            strings: ['UI Designs'],
            autoStart: true,
            loop: true,
            deleteSpeed: 6,
          }}
        />
      </h2>
      <div className='container' id='design-info'>
        <p>
          A gallery of UI designs created with Figma; these have not been implemented. For designs
          that I have programmed, feel free to check out my projects{' '}
          <Link to='/Choices' className='nested-link'>
            here!{' '}
          </Link>
        </p>
      </div>
      <div className='container column' id='gallery'>
        <h3>PawMates</h3>
        <div className='gallery-item'>
          <img src={PawMatesProto} alt='Gallery' />
        </div>
        <div className='design-description'>
          <p>
            <strong>Concept: </strong>A mobile app called PawMates that people can use to adopt a
            pet.
          </p>
          <p>
            <strong>Motivation: </strong>
            Adopting a pet probably the most thrilling feeling ever! I felt that creating an
            engaging and vibrant UI was necessary to couple with the feeling of adding a new family
            member; thus, I placed focus on choosing the right colors during this, as colors can
            influence how people feel.
          </p>
        </div>
        <h3>Create Account</h3>
        <div className='gallery-item'>
          <img src={CreateAccount} alt='Gallery' />
        </div>
        <div className='design-description'>
          <p>
            <strong>Concept: </strong>Dreamy design to create an account in an app.
          </p>
          <p>
            <strong>Motivation: </strong>I wanted to experiment with creating an exciting new
            account screen.
          </p>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Design;
