import React from 'react'
import $ from 'jquery'
import pg2img1 from '../assets/MHA/2-1.png'
import pg3img1 from '../assets/MHA/3-1.png'
import pg3img2 from '../assets/MHA/3-2.png'
import pg4img2 from '../assets/MHA/4-2.png'
import pg5img1 from '../assets/MHA/5-1.png'
import pg5img2 from '../assets/MHA/5-2.png'
import idea from '../assets/MHA/idea.png'
import pg6img1 from '../assets/MHA/6-1.png'
import pg7img1 from '../assets/MHA/7-1.png'
import pg7img2 from '../assets/MHA/7-2.png'
import One from '../assets/MHA/1.png'
import './MHA.scss'
import GoToTop from '../components/GoToTop'

const MHA = () => {

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
    <div className='MHA'>
      <div className='MHA-landing'>
        <div className='MHA-title'>Mental Health App</div>
        <img src={One} className='MHA-img'/>
      </div>

      <div className='mha-peach'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Navigation</p>
              <ul className='ul'>
                <li className='li'>View Entry</li>
                <li className='li'>Statistics</li>
                <li className='li'>Search</li>
              </ul>
            </div>
            <div className='mha-right-container' >
              <img src={pg2img1} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Add Entry</p>
              <p className='mha-left-text'>This page allows users to fill out a daily log. 
                Users have the choice of inputting a newly defined mood or choosing an option from a list of previous ones. 
                A section for notes is included at the bottom.</p>
            </div>
            <div className='mha-right-container' >
              <img src={pg3img1} className='mha-right-img'/>
              <img src={pg3img2} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Statistics</p>
              <p className='mha-left-text'>Statistics provides users with the option of viewing data to track trends in their overall health. 
                Functionalities include the ability to view a line graph of selected moods and a bar graph of multiple selected moods. </p>
            </div>
            <div className='mha-right-container' >
              <img src={pg4img2} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Search</p>
              <p className='mha-left-text'>Search allows users to locate past logs. Clicking on a search result pulls up the entire entry.</p>
            </div>
            <div className='mha-right-container' >
              <img src={pg5img1} className='mha-right-img'/>
              <img src={pg5img2} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      
      <div className='mha-green'>
        <div className='mha-green-content-container'>
          <div className='title-container'>
            <p className='animation-element slide-left mha-title'>Description</p>
            <img src={idea} className='idea'/>
          </div>
          <div className='animation-element slide-left mha-info-container'>
            <p>
            The Mental Health App was developed through the Women in Computer Science & Engineering (WiCSE) Shadowing Programing. 
            As part of the program, students are paired with an industry professional to create a project; in this case, a mentor from Opie Software.
            <br/><br/>
            The idea was to develop a full-stack application that allows users to track the progression of their mental health through daily logs and statistics.
            </p>
          </div>
        </div>
      </div>

      <div className='mha-green'>
        <div className='mha-green-content-container'>
          <p className='animation-element slide-left mha-title'>Technologies</p>
          <br/>
          <div className='animation-element slide-left mha-container-pg6'>
            <div className='tech-container'>
              <ul className='tech-item'> 
                  <p><strong>Languages</strong></p>
                  <div className='list'>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>SQL Script</li>
                  </div>
              </ul>
              <ul className='tech-item'> 
                  <p><strong>Frontend</strong></p>
                  <div className='list'>
                    <li>React Native</li>
                  </div>
              </ul>
              <ul className='tech-item'> 
                  <p><strong>Backend</strong></p>
                  <div className='list'>
                    <li>Spring Boot</li>
                    <li>Hibernate</li>
                    <li>SQL Database</li>
                  </div>
              </ul>
            </div>

            <div className='mha-right-'>
              <img src={pg6img1} className='mha-pg6-img'/>
            </div>

          </div>
        </div>
      </div>


      <div className='mha-green'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Initial Concept</p>
              <br/>
              <p><strong>Overview</strong></p>
                <ul className='ul'>
                  <li>Not visually appealing</li>
                  <li>Components (dropdown and input) not consistent</li>
                </ul>
                <br/>
                <p> <strong>Issues</strong></p>
                <ul className='ul'>
                  <li>Work with more challenging colors and improve interface design </li>
                  <br/>
                </ul>
            </div>
            <div className='mha-right-container' >
              <img src={pg7img1} className='mha-right-img'/>
              <img src={pg7img2} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-green'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Challenges</p>
              <br/>
                <ul className='ul'>
                  <li>No prior experience with frontend development and designing apps</li>
                  <li>Have not developed a full-stack application before </li>
                </ul>
                <br/><br/>
                <p className='animation-element slide-left mha-title'>Accomplishments</p>
                 <br/>
                <ul className='ul'>
                  <li>First full stack application</li>
                  <li>Improved design skills and developed interest in frontend work</li>
                  <li>Presented final product to company members at Opie Software</li>
                  <br/>
                </ul>
            </div>
            <div className='mha-right-container' >
            </div>
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  )
}

export default MHA