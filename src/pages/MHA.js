import React from 'react'
import $ from 'jquery'
import Home from '../assets/MHA/Home.png'
import AddEntry from '../assets/MHA/AddEntry.png'
import AddEntry2 from '../assets/MHA/AddEntry2.png'
import ViewEntry from '../assets/MHA/ViewEntry.png'
import Statistics from '../assets/MHA/Statistics.png'
import Search from '../assets/MHA/Search.png'
import SearchDetail from '../assets/MHA/SearchDetail.png'
import idea from '../assets/MHA/idea.png'
import TechArt from '../assets/MHA/TechArt.png'
import InitialDesign from '../assets/MHA/InitialDesign.png'
import InitialDesign2 from '../assets/MHA/InitialDesign2.png'
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
              <img src={Home} className='mha-right-img'/>
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
              <img src={AddEntry} className='mha-right-img'/>
              <img src={AddEntry2} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>View Entry</p>
              <p className='mha-left-text'>View Entry allows users to view a dropdown containing a list of their 
                logged entries for ease of access.</p>
            </div>
            <div className='mha-right-container' >
              <img src={ViewEntry} className='mha-right-img'/>
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
              <img src={Statistics} className='mha-right-img'/>
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
              <img src={Search} className='mha-right-img'/>
              <img src={SearchDetail} className='mha-right-img'/>
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
            Date: August 2020 - December 2020
            <br/><br/>
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
              <img src={TechArt} className='mha-pg6-img'/>
            </div>

          </div>
        </div>
      </div>


      <div className='mha-green'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Initial Concept Problem</p>
              <br/>
              <p><strong>Problem with initial design</strong></p>
                <ul className='ul'>
                  <li>Not visually appealing due to singular color</li>
                  <li>Components (dropdown and input) are not consistent</li>
                  <li>Overall design not welcoming despite being a Mental Health App (needs to feel warmer)</li>
                </ul>
                <br/>
                <p> <strong>Goal for next steps</strong></p>
                <ul className='ul'>
                  <li>Work with more challenging colors</li>
                  <li>Improve interface design and make app appear less cold (darker colors)</li>
                  <br/>
                </ul>
            </div>
            <div className='mha-right-container' >
              <img src={InitialDesign} className='mha-right-img'/>
              <img src={InitialDesign2} className='mha-right-img'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-green'>
        <div className='mha-content-container'>
          <div className='animation-element slide-left mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title'>Challenges in the beginning</p>
              <br/>
                <ul className='ul'>
                  <li>No prior experience with frontend development and designing apps (daunting at first)</li>
                  <li>Have not developed a full-stack application before and new to technologies</li>
                </ul>
                <br/><br/>
                <p className='animation-element slide-left mha-title'>Accomplishments at the end</p>
                 <br/>
                <ul className='ul'>
                  <li>First full stack application</li>
                  <li>Improved design skills and developed an interest in frontend work</li>
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