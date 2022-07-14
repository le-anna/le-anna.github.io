import React from 'react';
import './Design.scss'
import GoToTop from '../components/GoToTop'
import Typewriter from 'typewriter-effect';
import PawMates from '../assets/Designs/PawMates.png'
import PawMates2 from '../assets/Designs/PawMates2.png'
import CreateAccount from '../assets/Designs/CreateAccount.png'
import TuneIn from '../assets/Designs/TuneIn.png'
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
          deleteSpeed: 6
        }}
        />
    </h2>
    <div className='container' id='design-info'>
      <p>This is a gallery showcasing the UI designs that I made for fun! These were created using Figma and have not been implemented. 
        For designs that I have programmed, feel free to check out my projects under the Experiences tab!
      </p>    
    </div>
    <div className='container column' id='gallery'>
      <h3>PawMates</h3>
      <div className='container row' id='gallery-row'>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={PawMates} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>Design for a Pet Adoption App that people can use to find their pet mate! 
                Swipe left to skip or right to save.
                This design shows the preview users see for the pets when swiping.</p>
            </div>
          </div>
        </div>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={PawMates2} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>Second design shows a grid of the user's saved pets.</p>
            </div>
          </div>
        </div>
      </div>
      <h3>TuneIn</h3>
      <div className='container row' id='gallery-row'>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={TuneIn} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>Design for a social music app where people can share music with friends.
                Current screen is a user's profile page.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h3>Create an account</h3>
      <div className='container row' id='gallery-row'>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={CreateAccount} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>Simple idea for creating an account in a mobile app.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <GoToTop />
  </div>
  )
};

export default Design;
