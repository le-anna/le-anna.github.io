import React from 'react';
import { Link } from 'react-router-dom';
import './Design.scss';
import GoToTop from '../components/GoToTop';
import PawMatesProto from '../assets/Designs/PawMatesProto.png';
import CreateAccount from '../assets/Designs/CreateAccount.gif';
import TuneInProto from '../assets/Designs/TuneInProto.gif';
import Wireframe from '../assets/Designs/Wireframe.png';
import FilmClub from '../assets/Designs/FilmClub.gif';
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
          This is a gallery showcasing the UI designs that I made for fun! These were created using
          Figma and have not been implemented. For designs that I have programmed, feel free to
          check out my projects in{' '}
          <Link to='/Choices' className='nested-link'>
            Experiences!{' '}
          </Link>
        </p>
      </div>
      <div className='container column' id='gallery'>
        <h3>Film Club Protoype</h3>
        <div className='gallery-item'>
          <img src={FilmClub} alt='Gallery' />
        </div>
        <a
          className='nested-link'
          href='https://www.figma.com/proto/VjPiTgtxvwmlufEayYLbw9/UI-Designs?page-id=324%3A271&node-id=330%3A3538&viewport=797%2C-50%2C0.44&scaling=min-zoom&starting-point-node-id=330%3A2626'
          target='_blank'
        >
          View prototype on Figma
        </a>
        <div className='design-description'>
          <p>
            <strong>Concept: </strong>A mobile app called Film Club that people can use to converse
            about shows & movies.
          </p>
          <p>
            <strong>Motivation: </strong>Often, I see people talking about movies & shows across all
            media apps - from Twitter to Reddit. I, myself, have also lurked on these apps, hoping
            to find community over the grievances or drama of a new episode. Thus, I was motivated
            to design an app that would simplify this, centralizing all communication to one place.
          </p>
          <p>
            <strong>Design process:</strong> Because ideal users are people who watch movies &
            shows, I thought a dark UI would suit best. People tend to be in dark or dim lighting;
            thus, a bright UI design would be jarring on the eyes.
          </p>
        </div>
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
            Adopting a pet is exciting! I felt that creating an engaging and vibrant UI was
            necessary to couple with the excitement of finding a new family membe; thus, I placed
            focus on choosing the right colors, as colors can influence how people feel.
          </p>
        </div>
        <h3>TuneIn</h3>
        <div className='gallery-item'>
          <img src={TuneInProto} alt='Gallery' />
        </div>
        <div className='design-description'>
          <p>
            <strong>Concept: </strong>A mobile app called TuneIn that people can use to share
            thoughts on their music.
          </p>
          <p>
            <strong>Motivation: </strong>
            To easily share music among friends and family.
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
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default Design;
