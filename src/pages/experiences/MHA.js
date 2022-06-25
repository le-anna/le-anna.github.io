import React from 'react'
import $ from 'jquery'
import 'animate.css'
import Home from '../../assets/MHA/Home.png'
import MHAPreview from '../../assets/MHA/MHA.png'
import AddEntry from '../../assets/MHA/AddEntry.png'
import AddEntry2 from '../../assets/MHA/AddEntry2.png'
import ViewEntry from '../../assets/MHA/ViewEntry.png'
import Statistics from '../../assets/MHA/Statistics.png'
import Search from '../../assets/MHA/Search.png'
import SearchDetail from '../../assets/MHA/SearchDetail.png'
import InitialDesign from '../../assets/MHA/InitialDesign.png'
import InitialDesign2 from '../../assets/MHA/InitialDesign2.png'
import InitialDesign3 from '../../assets/MHA/InitialDesign3.png'
import One from '../../assets/MHA/1.png'
import './MHA.scss'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs
import GoToTop from '../../components/GoToTop'

const MHA = () => {

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
        <img src={One} id='mha-img' alt='Mental Health App'/>
      </div>
      
    <div className='container mha-peach'>
      <div className='mha-container animation slide'>
        <div className='mha-container-left'>
          <h2 className='animation slide'>Navigation</h2>
          <ul>
            <li className='li mha-nav'>Add Entry</li>
            <li className='li mha-nav'>View Entry</li>
            <li className='li mha-nav'>Statistics</li>
            <li className='li mha-nav'>Search</li>
          </ul>
        </div>
        <div className='container mha-container-right' >
          <img src={Home} alt='Mental Health App'/>
        </div>
      </div>
    </div>
  
    <div className='container mha-blue'>
      <div className='mha-container animation slide'>
        <div className='mha-container-left'>
          <h2 className='animation slide'>Add Entry</h2>
          <p>Add Entry allows users to complete a daily log. 
            Users have the choice of inputting a newly defined mood or choosing an option from a list of previous ones. 
            A section for notes is included at the bottom.</p>
        </div>
        <div className='container mha-container-right'>
          <img src={AddEntry} alt='Mental Health App'/>
          <img src={AddEntry2} alt='Mental Health App'/>
        </div>
      </div>
    </div>

    <div className='container mha-blue'>
      <div className='mha-container animation slide'>
        <div className='mha-container-left'>
          <h2 className='animation slide'>View Entry</h2>
          <p>View Entry provides users with access to a dropdown containing the dates of their 
            logged entries.</p>
        </div>
        <div className='container mha-container-right' >
          <img src={ViewEntry} alt='Mental Health App'/>
        </div>
      </div>
    </div>

    <div className='container mha-blue'>
      <div className='mha-container animation slide'>
        <div className='mha-container-left'>
          <h2 className='animation slide'>Statistics</h2>
          <p>Statistics provides users with visual features to track trends in their overall health. 
            Functionalities include the ability to view a line graph of selected moods or a bar graph of multiple selected moods. </p>
        </div>
        <div className='container mha-container-right' >
          <img src={Statistics} alt='Mental Health App'/>
        </div>
      </div>
    </div>

    <div className='container mha-blue'>
      <div className='mha-container animation slide'>
        <div className='mha-container-left'>
          <h2 className='animation slide'>Search</h2>
          <p>Search allows users to locate past logs. Clicking on a search result pulls up the entire entry.</p>
        </div>
        <div className='container mha-container-right' >
          <img src={Search} alt='Mental Health App'/>
          <img src={SearchDetail} alt='Mental Health App'/>
        </div>
      </div>
    </div>

    <div className='container mha-green'>
      <div className='mha-container mha-content animation slide'>
        <div className='mha-container-left mha-left-full'>
          <h2 className='animation slide'>Project Overview</h2>
          <p>The Mental Health App was developed through the <strong>Women in Computer Science & Engineering (WiCSE) Shadowing Programing</strong>. 
            As part of the program, students are paired with an industry professional to create a project. For my project, I recieved the opportunity of working with a mentor from <strong>Opie Software</strong>.</p>
          <br/>
          <p>The inspiration for the project was to develop a <strong>full-stack application</strong> that allows users to track the progression of their mental health. </p>
          <br/>
          <h3>Frontend technologies</h3>
          <p>JavaScript, React Native</p>
          <br/>
          <h3>Backend technologies</h3>
          <p><strong>Java, SQL, Hibernate, Spring Boot</strong></p>
          <br/>
          <h3>Timeline</h3>
          <p>August 2020 - December 2020</p>
        </div>
      </div>
    </div>

    <div className='container column mha-green'>
      <div className='mha-container mha-content animation slide' id='mha-content-column'>
        <div className='mha-left-container'>
          <h2 className='animation slide'>Midpoint Project Status</h2>
          <h3>Initial design problems</h3>
            <ul className='ul'>
              <li> App not visually appealing due to usage of a singular color.</li>
              <li>Components, such as the dropdown and input, are not consistent.</li>
              <li>Feedback highlighted an issue with the button affordance, as x icon looks like an error than delete.</li>
            </ul>
            <br/>
            <h3>Next steps</h3>
            <ul className='ul'>
              <li>Work with more challenging colors.</li>
              <li>Improve interface design and make app appear less cold.</li>
              <br/>
            </ul>
        </div>
        <div className='container' id='initial-img'>
          <img src={InitialDesign} alt='Mental Health App'/>
          <img src={InitialDesign2} alt='Mental Health App'/>
          <img src={InitialDesign3} alt='Mental Health App'/>
        </div>
      </div>
    </div>

    <div className='container mha-blue'>
      <div className='mha-container animation slide'>
        <div className='mha-container-left'>
          <h2 className='animation slide'>The Final Product</h2>
        </div>
        <div className='container mha-container-right' >
          <img src={MHAPreview} id='product-img' alt='Mental Health App'/>
        </div>
      </div>
    </div>

      <div className='next-btn-container'>
        <a href='https://devpost.com/software/retrofi'>View next: RetroFi -></a>
      </div>
      <GoToTop />
    </div>
  )
}

export default MHA