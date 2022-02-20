import React from 'react'
import $ from 'jquery'
import Logo from '../assets/CASMM/casmm_logo.png'
import arrow from '../assets/CASMM/arrow.png'
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
import './CASMM.css'
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
            Collaborating in the development of a block-based programming environment 
            at the University of Florida's Engaging Learning Lab
          <br/><br/>
            Showcasing some of the UX/UI improvements that I contributed to the project
          <br/> <br/>
            https://casmm.org
          </p> <br/>
        </div>
      </div>
      <div className='br'/>
      <div className='casmm-blue'>
        <div className='casmm-content-container'>
          <p className='animation-element slide-left casmm-title'>Description</p>
          <div className='animation-element slide-left casmm-info-container'>
            <br/>
            <div className='casmm-text-container'>
              <p>CaSMM is developed by the University of Florida and Texas A&M with support from 
                the National Science Foundation
              </p>
              <br/>
              <p><strong>Users consist of</strong></p>
              <ul className='ul'>
                <li>5th and 6th graders</li>
                <li>Content Creators: individuals developing the learning content</li>
                <li>Mentors: individuals teaching the lessons</li>
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
              <p><strong>Overview</strong></p>
                <ul className='ul'>
                  <li>Initially, CaSMM was primarily focused on the functionality</li>
                </ul>
                <br/>
                <p> <strong>Issues</strong></p>
                <ul className='ul'>
                  <li>Initial color scheme was flat </li>
                  <li>Buttons were grey and did not stand out</li>
                  <li>Components were simple shapes and not dynamic</li>
                  <li>Lack of responsiveness among pages and components</li>
                  <br/>
                  <div className='casmm-color-container'>
                    <img src={pg3img2} className='casmm-info-img-2'/>
                    <p>Inital Color Scheme</p>
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
          <div className='animation-element slide-left note'><strong>Some features the Principle Investigator wanted to maintain
            in the new design</strong></div>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg4img1} className='pg4img'/>
            <p className='pg4img-text'>Example of a modular layout; components are encased in a white background</p>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <p className='pg4img-text'>Keep the blue subheading and make consistent across all of the views</p>
            <img src={pg4img2} className='pg4img'/>
          </div>
        </div>
      </div>

      <div className='casmm-yellow'>
        <div className='casmm-content-container-pg4'>
          <p className='animation-element slide-left casmm-title'>Mentor View Before & After</p>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg5img1} className='pg4img'/> 
            <p className='pg4img-text'>This was the Mentor view before any changes were made and the new style applied</p>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <p className='pg4img-text'>This is  the redesign after a new style guide was created</p>
            <img src={pg5img2} className='pg4img'/>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg5img3} className='pg4img'/>
            <p className='pg4img-text'>Clickable top right button that changes color on hover</p>
          </div>
        </div>
      </div>
       
      <div className='casmm-yellow'>
        <div className='casmm-content-container-pg4'>
          <p className='animation-element slide-left casmm-title'>Roster View Before & After</p>
          <div className='animation-element slide-left pg4img-container'>
            <img src={pg6img1} className='pg4img'/>
            <p className='pg4img-text'>This was the Roster view before any changes were made and the new style applied</p>
          </div>
          <div className='animation-element slide-left pg4img-container'>
            <p className='pg4img-text'>This is  the redesign after a new style guide was created</p>
            <img src={pg6img2} className='pg4img'/>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  )
}

export default CASMM