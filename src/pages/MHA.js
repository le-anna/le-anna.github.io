import React from 'react'
import $ from 'jquery'
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css'
import Home from '../assets/MHA/Home.png'
import MHAPreview from '../assets/MHA/MHA.png'
import AddEntry from '../assets/MHA/AddEntry.png'
import AddEntry2 from '../assets/MHA/AddEntry2.png'
import ViewEntry from '../assets/MHA/ViewEntry.png'
import Statistics from '../assets/MHA/Statistics.png'
import Search from '../assets/MHA/Search.png'
import SearchDetail from '../assets/MHA/SearchDetail.png'
import TechArt from '../assets/MHA/TechArt.png'
import InitialDesign from '../assets/MHA/InitialDesign.png'
import InitialDesign2 from '../assets/MHA/InitialDesign2.png'
import InitialDesign3 from '../assets/MHA/InitialDesign3.png'
import One from '../assets/MHA/1.png'
import './MHA.scss'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs
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
      <div className='container' id='mha-landing'>
        <div id='mha-title'>
          <Typewriter 
            options={{
              strings: ['Mental Health App'],
              autoStart: true,
              loop: true,
              deleteSpeed: 6
            }}
            />
        </div>
        {/* <div className='MHA-title'>Mental Health App</div> */}
        <img src={One} id='mha-img' alt='Mental Health App'/>
      </div>

      <div className='mha-peach'>
        <div className='container mha-content'>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title' id='app-title'>Navigation</p>
              <ul className='mha-left-text'>
                <li className='li mha-nav'>Add Entry</li>
                <li className='li mha-nav'>View Entry</li>
                <li className='li mha-nav'>Statistics</li>
                <li className='li mha-nav'>Search</li>
              </ul>
            </div>
            <div className='container mha-right-container' >
              <img src={Home} className='mha-right-img' alt='Mental Health App'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='container mha-content'>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title' id='app-title'>Add Entry</p>
              <p className='mha-left-text'>Add Entry allows users to complete a daily log. 
                Users have the choice of inputting a newly defined mood or choosing an option from a list of previous ones. 
                A section for notes is included at the bottom.</p>
            </div>
            <div className='container mha-right-container' >
              <img src={AddEntry} className='mha-right-img' alt='Mental Health App'/>
              <img src={AddEntry2} className='mha-right-img' alt='Mental Health App'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='container mha-content'>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title' id='app-title'>View Entry</p>
              <p className='mha-left-text'>View Entry provides users with access to a dropdown containing the dates of their 
                logged entries.</p>
            </div>
            <div className='container mha-right-container' >
              <img src={ViewEntry} className='mha-right-img' alt='Mental Health App'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='container mha-content'>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title' id='app-title'>Statistics</p>
              <p className='mha-left-text'>Statistics provides users with visual features to track trends in their overall health. 
                Functionalities include the ability to view a line graph of selected moods or a bar graph of multiple selected moods. </p>
            </div>
            <div className='container mha-right-container' >
              <img src={Statistics} className='mha-right-img' alt='Mental Health App'/>
            </div>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='container mha-content'>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container'>
              <p className='animation-element slide-left mha-title' id='app-title'>Search</p>
              <p className='mha-left-text'>Search allows users to locate past logs. Clicking on a search result pulls up the entire entry.</p>
            </div>
            <div className='container mha-right-container' >
              <img src={Search} className='mha-right-img' alt='Mental Health App'/>
              <img src={SearchDetail} className='mha-right-img' alt='Mental Health App'/>
            </div>
          </div>
        </div>
      </div>

      
      <div className='mha-green'>
        <div className='container column mha-content'>
            <p className='animation-element slide-left mha-title'>Project Overview</p>
          <div className='animation-element slide-left container row mha-info-container'>
            <p>
            Date: August 2020 - December 2020
            <br/><br/>
            The Mental Health App was developed through the Women in Computer Science & Engineering (WiCSE) Shadowing Programing. 
            As part of the program, students are paired with an industry professional to create a project. For my project, I recieved the opportunity of working with a mentor from Opie Software.
            <br/><br/>
            The inspiration for the project was to develop a full-stack application that allows users to track the progression of their mental health.
            </p>
          </div>
        </div>
      </div>

      <div className='mha-green'>
        <div className='container-left column mha-content'>
          <p className='animation-element slide-left mha-title'>Technologies</p>
          <div className='container-left column tech-items'>
            <ul className='tech-item'> 
                <p><strong>Languages</strong></p>
                <div className='list'>
                  <li>JavaScript</li>
                  <li>Java</li>
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
        </div>
        <div className='container mha-right-container' >
          <img src={TechArt} id='tech-img' alt='Mental Health App'/>
        </div>
      </div>


      <div className='mha-green'>
        <div className='container column mha-content'>
          <p className='animation-element slide-left mha-title'>Midpoint Project Status</p>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container'>
              <p><strong>Initial design problems</strong></p>
                <ul className='ul'>
                  <li>The app was not visually appealing due to usage of a singular color.</li>
                  <li>Components, such as the dropdown and input, are not consistent.</li>
                  <li>Feedback highlighted an issue with the button affordance, as the x icon looks like errors than delete.</li>
                </ul>
                <br/>
                <p> <strong>Goals for next steps</strong></p>
                <ul className='ul'>
                  <li>Work with more challenging colors.</li>
                  <li>Improve interface design and make app appear less cold (darker colors).</li>
                  <br/>
                </ul>
            </div>
            <div className='container mha-right-container' >
              <img src={InitialDesign} className='mha-right-img' alt='Mental Health App'/>
              <img src={InitialDesign2} className='mha-right-img' alt='Mental Health App'/>
            </div>
            <img src={InitialDesign3} className='mha-img-delete' alt='Mental Health App'/>
          </div>
        </div>
      </div>

      <div className='mha-blue'>
        <div className='container mha-content'>
          <div className='animation-element slide-left container row mha-info-container'>
            <div className='mha-left-container' id='final-left'>
              <p className='animation-element slide-left mha-title'>The Final Product</p>
            </div>
            <div className='container mha-right-container' >
              <img src={MHAPreview} className='mha-right-img'id='product-img' alt='Mental Health App'/>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='mha-green'>
        <div className='container column mha-content'>
        <p className='animation-element slide-left mha-title'>Initial Challenges</p>
          <div className='animation-element slide-left container row mha-info-container'>
              <ul className='ul'>
                <li>No prior experience with frontend development and designing apps.</li>
                <li>New to the technologies used.</li>
              </ul>
          </div>
        </div>
      </div>

      <div className='mha-green'>
        <div className='container column mha-content'>
        <p className='animation-element slide-left mha-title'>Accomplishments</p>
          <div className='animation-element slide-left container row mha-info-container'>
                <ul className='ul'>
                  <li>Developed full stack application.</li>
                  <li>Improved design skills and developed an interest in frontend work.</li>
                  <li>Presented final product to company members at Opie Software.</li>
                  <br/>
                </ul>
          </div>
        </div>
      </div> */}

      <div className='next-btn-container'>
        <a href='https://devpost.com/software/retrofi'>View next: RetroFi <FaArrowRight/></a>
      </div>
      <GoToTop />
    </div>
  )
}

export default MHA