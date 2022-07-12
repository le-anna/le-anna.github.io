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
    <div id='design-title'>
      <Typewriter 
        options={{
          strings: ['UI Designs'],
          autoStart: true,
          loop: true,
          deleteSpeed: 6
        }}
        />
    </div>
    <div className='container' id='design-info'>
      <p>This is a gallery showcasing my UI designs that I made for fun! Note: these were created using Figma and have not been implemented. 
        For designs that I have programmed, feel free to check out my projects under the Experiences tab!
      </p>    
    </div>
    <div className='container column' id='gallery'>
      <h1>PawMates</h1>
      <div className='container row' id='gallery-row'>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={PawMates} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>UI Design for a Pet Adoption App that people can use to find their perfect pet mate! 
                Swipe left to skip or right to save.
                The first design is the pet profile page.</p>
            </div>
          </div>
        </div>

        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={PawMates2} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>The second design is a screen containing a user's saved pets.</p>
            </div>
          </div>
        </div>
      </div>

      <h1>TuneIn</h1>
      <div className='container row' id='gallery-row'>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={TuneIn} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>An idea for a social music app where people can share music with friends.
                Design is for a profile page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1>Create account</h1>
      <div className='container row' id='gallery-row'>
        <div className='container row gallery-row-item'>
          <div className='content'>
            <div className='content-overlay'></div> 
            <img src={CreateAccount} className='gallery-img' alt='Gallery'/>
            <div className='content-details'>
              <p>A simple design for creating an account in a mobile app.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    {/* <div id='design-gallery'>
      <Gallery photos={photos} direction={"column"} />
    </div> */}
    <GoToTop />
  </div>
  )
};

export default Design;
