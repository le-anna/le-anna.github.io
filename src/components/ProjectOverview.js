import { React } from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import 'animate.css'
import './ProjectOverview.scss'
import CASMM from '../assets/CASMM/casmm.png'
import MHA from '../assets/MHA/MHA.png'
import Choices from '../assets/Choices/choices.png'
import retrofi from '../assets/retrofi.png'

const ProjectOverview = ({title, role, tech, description, link, img}) => {

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
    <div className='container row' id='prj'>
      <div className='animation-element slide-left container' id='prj-container'>
        <div className='container-left column' id='prj-info-container'>
          <h1 id='prj-title'>{title}</h1>
          <p id='prj-role'>{role}</p>
          <p id='prj-description'>{description}</p>
          <p id='prj-tech'>{tech}</p>
          <div id ='prj-link'>
            {
              link === 'retrofi' ? 
                <a href='https://devpost.com/software/retrofi' className='button' id='prj-btn'>Link</a> 
                :
              < Link to={link} className='button' id='prj-btn'>Read More</Link>
            }
          </div>
        </div>
        <div id='prj-img-container'>
          {
            img === 'CASMM' ? <img src={CASMM} id='prj-img' alt='CaSMM'/> : 
            img === 'retrofi' ? <img src={retrofi} id='prj-img' alt='RetroFi'/> : 
            img === 'MHA' ? <img src={MHA} id='prj-img' alt='Mental Health App'/> : 
            img === 'Choices' ? <img src={Choices} id='prj-img' alt='Choices'/> : 
            <div className='choices-status'>Currently in development </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
