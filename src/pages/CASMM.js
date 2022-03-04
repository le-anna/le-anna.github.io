import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Logo from '../assets/CASMM/casmm_logo.png'
import pg2img1 from '../assets/CASMM/2-1.png'
import pg3img1 from '../assets/CASMM/3-1.png'
import pg3img2 from '../assets/CASMM/3-2.png'
import pg4img1 from '../assets/CASMM/4-1.png'
import pg4img2 from '../assets/CASMM/4-2.png'
import pg5img1 from '../assets/CASMM/5-1.png'
import pg5img2 from '../assets/CASMM/5-2.png'
import pg5img3 from '../assets/CASMM/5-3.png'
import pg6img1 from '../assets/CASMM/6-1.png'
import pg6img2 from '../assets/CASMM/6-2.png'
import './CASMM.scss'
import GoToTop from '../components/GoToTop'

const CASMM = () => {

    // https://codepen.io/simoncodrington/pen/Mwgqqd for animation
    $(document).ready(function() {

      var animation_elements = $.find('.animation-element');
      var web_window = $(window);
    
      function check_if_in_view() {
        var window_height = web_window.height();
        var window_top_position = web_window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
    
        $.each(animation_elements, function() {
          var element = $(this);
          var element_height = $(element).outerHeight();
          var element_top_position = $(element).offset().top;
          var element_bottom_position = (element_top_position + element_height);
    
          if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
          } else {
            element.removeClass('in-view');
          }
        });
    
      }
    
      $(window).on('scroll resize', function() {
          check_if_in_view()
        })

      $(window).trigger('scroll');
    
    });

  return (
    <div className='casmm'>

      <div className='casmm-landing'>
        <img src={Logo} className='logo'/>
        <div className='casmm-one-description'>
          <p>
            Collaborate in the development of a block-based programming environment 
            for K-12 students to learn how to code Arduinos
          <br/><br/>
            Showcasing some of the UX/UI improvements that I contributed to the project
            <br/><br/>
            https://www.casmm.org/
          </p>   
          <br/>
        </div>
      </div>

      <div className='casmm-blue'>
        <div className='casmm-content-container'>
          <p className='animation-element slide-left casmm-title'>Description</p>
          <div className='animation-element slide-left casmm-info-container'>
            <br/>
            <div className='casmm-text-container'>
              <p>
                Date: April 2021 - Present
                <br/><br/>
                CaSMM is developed by the University of Florida and Texas A&M with support from 
                the National Science Foundation and is currently undergoing testing/research in classrooms.
              </p>
              <br/>
              <p><strong>Users consist of</strong></p>
              <ul className='ul'>
                <li>5th and 6th graders</li>
                <li>Content Creators: develop the learning content</li>
                <li>Mentors: teach the content</li>
                <li>Researchers</li>
              </ul>
              <br/>
              <p> <strong>Frontend technologies used</strong></p>
              <ul className='ul'>
                <li>React.js and CSS (.less)</li>
              </ul>
              <br/>
              <p className='animation-element slide-left casmm-title'>Role</p>
              <p className='role-description'>Frontend Developer</p>
            </div>
            <img src={pg2img1} className='casmm-info-img'/>
          </div>
        </div>
      </div>

      <div className='casmm-white'>
        <div className='casmm-content-container'>
          <p className='animation-element slide-left casmm-title'>Problems</p>
          <div className='animation-element slide-left casmm-info-container'>
            <br/>
            <div className='casmm-text-container'>
                <p> <strong>Issues</strong></p>
                <ul className='ul'>
                  <li>Color palette was monotonous and lacked an accent color.</li>
                  <li>Buttons were gray and did not stand out against other features, making it difficult to identify as a button.</li>
                  <li>Components were simple shapes.</li>
                  <li>There was a lack of responsiveness among components, resulting in overlap.</li>
                  <br/>
                  <div className='casmm-color-container'>
                    <img src={pg3img2} className='casmm-info-img-2'/>
                    <p>Inital Color Palette</p>
                  </div>
                </ul>
            </div>
            <img src={pg3img1} className='casmm-info-img'/>
          </div>
        </div>
      </div>

      <div className='casmm-yellow'>
        <div className='casmm-content-container-pg4'>
          <p className='animation-element slide-left casmm-title'>Requirements</p>
          <div className='animation-element slide-left note'><strong>Some features from the original design that 
            the Principle Investigator wanted to maintain in the redesign.</strong></div>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg4img1} className='pg4img'/>
            <p className='pg4img-text'>Keep modular layout (components encased in a white background to model a learning module).</p>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <p className='pg4img-text'>Keep the blue subheading and make this consistent across all the views (located in some of the pages at this times).</p>
            <img src={pg4img2} className='pg4img'/>
          </div>
        </div>
      </div>

      <div className='casmm-yellow'>
        <div className='casmm-content-container-pg4'>
          <p className='animation-element slide-left casmm-title'>Solution: Mentor View</p>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg5img1} className='pg4img'/> 
            <p className='pg4img-text'>BEFORE: This was the Mentor view before any changes were made to the design. The afforance
              for the buttons is poor. The grey color and rectangular shape of the button is not consistent with other designs found in other applications, making its functionality ambiguous. The text within the box is also small and not readable.</p>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <p className='pg4img-text'>AFTER: The card was redesigned to improve readability. The content was divided up into sections, allowing Mentors to  quickly find the information they need. The accessibility was also improved, as Mentors can now click on the Join Code (a popup to display the code in classrooms for students) 
              instead of having to click on the View button to access it on another page.</p>
            <img src={pg5img2} className='pg4img'/>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg5img3} className='pg4img'/>
            <p className='pg4img-text'>Image of the clickable Join Code.</p>
          </div>
        </div>
      </div>
       
      <div className='casmm-yellow'>
        <div className='casmm-content-container-pg4'>
          <p className='animation-element slide-left casmm-title'>Solution: Roster View</p>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg6img1} className='pg4img'/>
            <p className='pg4img-text'>BEFORE: The Roster view contains a grid of cards with information for each student. As observed from the image,
              the Roster view share a similar issue with the Mentor view in regard to the buttons: poor affordance. The cards are also not responsive in this case, 
              causing the overlap which makes the button text indecipherable.</p>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <p className='pg4img-text'>AFTER: The redesign improved the responsiveness of the page. Further, the cards model the layout of a profile page
            with the yellow to represent the header (this usually include the icon and name). The size of the icon 
            was also increased, allowing Mentors to identify the image better. </p>
            <img src={pg6img2} className='pg4img'/>
          </div>
        </div>
      </div>
      <div className='next-btn-container'>
         <Link to='/MentalHealthApp' className='link'> Click to view my next experience: Mental Health App <FaArrowAltCircleRight/></Link>
      </div>
      <GoToTop />
    </div>
  )
}

export default CASMM