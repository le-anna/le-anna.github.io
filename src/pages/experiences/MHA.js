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
    <div id='mha'>
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
      <div className='flex row mha-container animation slide'>
        <div className='mha-left'>
          <h2 className='animation slide'>Navigation</h2>
            <p>Add Entry</p>
            <p>View Entry</p>
            <p>Statistics</p>
            <p>Search</p>
        </div>
        <div className='container mha-right' >
          <img src={Home} alt='Mental Health App'/>
        </div>
      </div>
    </div>
    <div className='container mha-blue'>
      <div className='flex row mha-container animation slide'>
        <div className='mha-left'>
          <h2 className='animation slide'>Add Entry</h2>
          <p>Add Entry allows users to complete a daily log. 
            Users have the choice of inputting a newly defined mood or choosing an option from a list of previous ones. 
            A section for notes is included at the bottom.</p>
        </div>
        <div className='container mha-right'>
          <img src={AddEntry} alt='Mental Health App'/>
          <img src={AddEntry2} alt='Mental Health App'/>
        </div>
      </div>
    </div>
    <div className='container mha-blue'>
      <div className='flex row mha-container animation slide'>
        <div className='mha-left'>
          <h2 className='animation slide'>View Entry</h2>
          <p>View Entry provides users with access to a dropdown containing the dates of their 
            logged entries.</p>
        </div>
        <div className='container mha-right' >
          <img src={ViewEntry} alt='Mental Health App'/>
        </div>
      </div>
    </div>

    <div className='container mha-blue'>
      <div className='flex row mha-container animation slide'>
        <div className='mha-left'>
          <h2 className='animation slide'>Statistics</h2>
          <p>Statistics provides users with visual features to track trends in their overall health. 
            Functionalities include the ability to view a line graph of selected moods or a bar graph of multiple selected moods. </p>
        </div>
        <div className='container mha-right' >
          <img src={Statistics} alt='Mental Health App'/>
        </div>
      </div>
    </div>
    <div className='container mha-blue'>
      <div className='flex row mha-container animation slide'>
        <div className='mha-left'>
          <h2 className='animation slide'>Search</h2>
          <p>Search allows users to locate past logs. Clicking on a search result pulls up the entire entry.</p>
        </div>
        <div className='container mha-right' >
          <img src={Search} alt='Mental Health App'/>
          <img src={SearchDetail} alt='Mental Health App'/>
        </div>
      </div>
    </div>
    <div className='container mha-peach'>
      <div className='flex row mha-container mha-content animation slide'>
        <div className='mha-left mha-left-full'>
          <h2 className='animation slide'>Project Overview</h2>
          <p>The Mental Health App was developed through the <strong>Women in Computer Science & Engineering (WiCSE) Shadowing Programing</strong>. 
            As part of the program, students were paired with an industry professional to create a project. For my project, I recieved the opportunity of working with a mentor from <strong>Opie Software</strong>.</p>
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
    <div className='container mha-peach'>
      <div className='flex row mha-container mha-content animation slide'>
        <div className='mha-left mha-left-full'>
          <h2 className='animation slide'>Process</h2>
          <p>
            The Mental Health project was an enlightening experience for me. This was my first full-stack project, so there was a lot to learn 
            in the initial stages.
            <br/>
            <br/>
           </p>
           <h3>Languages? Technologies?</h3>
           <p>
            To start, I used SQL for my database, as I wanted to work with a <strong>relational database</strong>.
            I chose Java for my backend langauge to develop a stronger understanding of it. 
            With Java and SQL decided upon, I added Hibernate and Spring Boot as the remaining technologies to my backend tech stack;
            Hibernate to map my Java objects to the SQL database, and Spring Boot for its REST services. 
            <br/><br/>
            For my frontend technologies, I used React Native (JavaScript), which provides tools to create mobile applications. 
          </p>
        </div>
      </div>
    </div>
    <div className='container column mha-peach'>
      <div className='flex row mha-container mha-content animation slide' id='mha-content-column'>
        <div className='mha-left'>
          <h2 className='animation slide'>Midpoint Status</h2>
          <h3>Initial design problems</h3>
          <p>This project posed a new challenge that I had not expected: design. I struggled with
            coming up with an idea for the look and feel of the project.
            My experience with UI design was little to none at this point. As a consequence, I chose a singular accent color, changed the border-radius, and kept it minimal. 
            I thought that it would be enough just to change those few properties, believing that it would pass off as minimal. 
            <br/><br/>
            I soon came to a realization: it was not.
          </p>
          <br/>
          <h3>Analysis of Initial Design</h3>
            <ul className='ul'>
              <li>App was not visually appealing due to singular color; pages felt flat and did not encourage engagement.</li>
              <li>There were several issues related to <strong>consistency</strong>: [1] the dropdown and input components have different stylings (border presence, border color, and background color vary); 
              [2] green elements use both black and white as a text color; [3] buttons change in size across different pages.</li>
              <li>Feedback highlighted an issue with the button affordance, as the x icon looks like an error rather than delete.</li>
            </ul>
            <br/>
            <h3>New Goal</h3>
            <p>After re-evaluating my current progress, I decided to allot more attention to improving the design of the app. 
            </p>
            <br/>
            <h3>How To Achieve Goal? Research?</h3>
            <p>To achieve this goal, I dedicated time to researching mobile apps and identifying various design approaches. For instance,
              I reviewed a plethora of UI designs for different applications and made note of any reoccuring themes that I liked. From this research, 
              I gained a <strong>key takeaway</strong>: design is important. 
            </p>
            <br/><br/>
        </div>
        <div className='container' id='initial-img'>
          <img src={InitialDesign} alt='Mental Health App'/>
          <img src={InitialDesign2} alt='Mental Health App'/>
          <img src={InitialDesign3} alt='Mental Health App'/>
        </div>
      </div>
    </div>
    <div className='container mha-peach'>
      <div className='flex row mha-container mha-content animation slide'>
        <div className='mha-left mha-left-full'>
          <h2 className='animation slide'>Conclusion</h2>
          <p>Overall, I felt proud of what I created by the end. Learning how to create a full-stack application
            was daunting at first - I couldn't comprehend how everything was interconnected. I began the Mental Health project feeling intimidated by design to 
            uncovering a newfound passion for it. I am grateful for WiCSE's Shadowing Program for this opportunity.
          </p>
        </div>
      </div>
    </div>
    <div className='container mha-blue'>
      <div className='flex row mha-container animation slide'>
        <div className='mha-left'>
          <h2 className='animation slide'>The Final Product</h2>
        </div>
        <div className='container mha-right' >
          <img src={MHAPreview} id='product-img' alt='Mental Health App'/>
        </div>
      </div>
    </div>
      <div className='next-btn-container'>
        <a href='https://devpost.com/software/retrofi'>View next: RetroFi (Link) -></a>
      </div>
      <GoToTop />
    </div>
  )
}

export default MHA