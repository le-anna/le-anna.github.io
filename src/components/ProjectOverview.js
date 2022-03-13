import { React } from 'react';
import $ from 'jquery'
import { Link } from 'react-router-dom';
import 'animate.css'
import './ProjectOverview.css'
import CASMM from '../assets/CASMM/casmm.png'
import MHA from '../assets/MHA/MHA.png'
import retrofi from '../assets/retrofi.png'

const ProjectOverview = ({title, role, type, description, link, img}) => {

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
    <div className='container row' id='project-overview'>
      <div className='animation-element slide-left project-container'>
        <div className='prj-info-container'>
          <p className='type'>{type}</p>
          <h1 className='title'>{title}</h1>
          <p className='prj-role'>{role}</p>
          <p className='prj-description'>{description}</p>
          <div className ='prj-link-container'>
            {
              link === 'retrofi' ? <a href='https://devpost.com/software/retrofi' className='prj-button'>Link</a> :
              <Link to={link} className='prj-button'>Read More</Link>
            }
          </div>
        </div>
        <div className='prj-image-container'>
          {
            img === 'CASMM' ? <img src={CASMM} className='prj-img'/> : 
            img === 'retrofi' ? <img src={retrofi} className='prj-img'/> : 
            img === 'MHA' ? <img src={MHA} className='prj-img'/> : 
            <div className='choices-status'>Currently in UX design process</div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
