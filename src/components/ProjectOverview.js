import { React, useState } from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import 'animate.css'
import './ProjectOverview.scss'
import CASMM from '../assets/CASMM/casmm.png'
import MHA from '../assets/MHA/MHA.png'
import Choices from '../assets/Choices/choices.png'
import retrofi from '../assets/retrofi.png'
import Mastercard from '../assets/mastercard.png'
import { BiLinkExternal } from 'react-icons/bi'

const ProjectOverview = ({title, role, tech, description, link, img}) => {

  // https://codepen.io/simoncodrington/pen/Mwgqqd for animation
  $(document).ready(function() {

    var animation_elements = $.find('.animation');
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
    <div className='container row' id='prj'>
      <div className='animation slide container' id='prj-container'>
        <div className='flex column' id='prj-info-container'>
          <h1 id='prj-title'>{title}</h1>
          <p id='prj-role'>{role}</p>
          <div className='flex column' id='prj-text'>
            <p id='description'>{description}</p>
            <p id='tech'>{tech}</p>
          </div>
          { title != 'Mastercard' ? 
            <div className='container' id ='prj-link'>
              {
                link === 'retrofi' ? 
                  <a href='https://devpost.com/software/retrofi' className='button prj-btn'>RetroFi&nbsp;<BiLinkExternal/></a> 
                  :
                < Link to={link} className='button prj-btn'>Read More</Link>
              }
            </div>
            : null
         }
        </div>
        <div className='container' id='prj-img-container'> 
        {
          img === 'CASMM' ? <img src={CASMM} alt='CaSMM'/> : 
          img === 'retrofi' ? <img src={retrofi} alt='RetroFi'/> : 
          img === 'MHA' ? <img src={MHA} alt='Mental Health App'/> : 
          img === 'Choices' ? <img src={Choices} alt='Choices'/> :
          img === 'Mastercard' ? <img id='mastercard-logo' src={Mastercard} alt='Mastercard'/> :
          null
        }
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
