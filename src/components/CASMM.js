import React from 'react'
import $ from 'jquery'
import Logo from '../assets/CASMM/casmm_logo.png'
import pg2img1 from '../assets/CASMM/2-1.png'
import pg3img1 from '../assets/CASMM/3-1.png'
import pg3img2 from '../assets/CASMM/3-2.png'
import Three from '../assets/CASMM/3.png'
import Four from '../assets/CASMM/4.png'
import Five from '../assets/CASMM/5.png'
import Six from '../assets/CASMM/6.png'
import Seven from '../assets/CASMM/7.png'
import './CASMM.css'

const CASMM = () => {

  /*Interactivity to determine when an animated element in in view. In view elements trigger our animation*/
  $(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});

  return (
    <div className='casmm'>
      <div className='casmm-landing'>
        <img src={Logo} className='logo'/>
        <div className='casmm-one-description'>
          <p>
            Collaborating in the development of a block-based programming environment 
            at the University of Florida's Engaging Learning Lab.
          <br/><br/>
            Showcasing the UX/UI improvements that I contributed to the project.
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
              <p> <strong>Technologies used</strong></p>
              <ul className='ul'>
                <li>React.js and CSS (.less)</li>
              </ul>
              <br/>
              <p className='animation-element slide-left casmm-title'>Role</p>
              <p>Undergraduate Frontend Developer</p>
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
                  <li>Initially, CaSMM was primarily focused on the functionality.</li>
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
       
       {/* <img src={Two} className='CASMM-img'/>
       <img src={Three} className='CASMM-img'/>
       <img src={Four} className='CASMM-img'/>
       <img src={Five} className='CASMM-img'/>
       <img src={Six} className='CASMM-img'/>
       <img src={Seven} className='CASMM-img'/> */}
    </div>
  )
}

export default CASMM