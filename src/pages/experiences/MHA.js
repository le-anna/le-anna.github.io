import React from 'react';
import $ from 'jquery';
import 'animate.css';
import Home from '../../assets/MHA/Home.png';
import MHAPreview from '../../assets/MHA/MHA.png';
import AddEntry from '../../assets/MHA/AddEntry.png';
import AddEntry2 from '../../assets/MHA/AddEntry2.png';
import ViewEntry from '../../assets/MHA/ViewEntry.png';
import Statistics from '../../assets/MHA/Statistics.png';
import Search from '../../assets/MHA/Search.png';
import SearchDetail from '../../assets/MHA/SearchDetail.png';
import InitialDesign from '../../assets/MHA/InitialDesign.png';
import InitialDesign2 from '../../assets/MHA/InitialDesign2.png';
import InitialDesign3 from '../../assets/MHA/InitialDesign3.png';
import One from '../../assets/MHA/1.png';
import './MHA.scss';
import { BiLinkExternal } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs
import GoToTop from '../../components/GoToTop';

const MHA = () => {
  // https://codepen.io/simoncodrington/pen/Mwgqqd for animation
  $(document).ready(function () {
    var animation_elements = $.find('.animation');
    var web_window = $(window);

    function check_if_in_view() {
      var window_height = web_window.height();
      var window_top_position = web_window.scrollTop();
      var window_bottom_position = window_top_position + window_height;

      $.each(animation_elements, function () {
        var element = $(this);
        var element_height = $(element).outerHeight();
        var element_top_position = $(element).offset().top;
        var element_bottom_position = element_top_position + element_height;

        if (
          element_bottom_position >= window_top_position &&
          element_top_position <= window_bottom_position
        ) {
          element.addClass('in-view');
        } else {
          element.removeClass('in-view');
        }
      });
    }

    $(window).on('scroll resize', function () {
      check_if_in_view();
    });

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
              deleteSpeed: 6,
            }}
          />
        </div>
        <img src={One} id='mha-img' alt='Mental Health App' />
      </div>
      <div className='mha-blue-wrapper container column'>
        <div className='container '>
          <div className='flex row mha-container animation slide'>
            <div className='mha-left'>
              <h2 className='animation slide'>Navigation</h2>
              <p>
                Users can navigate through the app using the navbar located at the bottom of the
                home screen.
              </p>
              <p>
                [1] <em>View Entry</em> [2] <em>Statistics</em> [3] <em>Search</em>
              </p>
            </div>
            <div className='container mha-right'>
              <img src={Home} alt='Mental Health App' />
            </div>
          </div>
        </div>
        <div className='container '>
          <div className='flex row mha-container animation slide'>
            <div className='mha-left'>
              <h2 className='animation slide'>Add Entry</h2>
              <p>
                Add Entry allows users to complete a daily log. Users have the choice of inputting a
                newly defined mood or choosing an option from a list of previous ones. A section for
                notes is included at the bottom.
              </p>
            </div>
            <div className='container mha-right'>
              <img src={AddEntry} alt='Mental Health App' />
              <img src={AddEntry2} alt='Mental Health App' />
            </div>
          </div>
        </div>
        <div className='container '>
          <div className='flex row mha-container animation slide'>
            <div className='mha-left'>
              <h2 className='animation slide'>View Entry</h2>
              <p>
                View Entry provides users with access to a dropdown containing the dates of their
                logged entries.
              </p>
            </div>
            <div className='container mha-right'>
              <img src={ViewEntry} alt='Mental Health App' />
            </div>
          </div>
        </div>
        <div className='container '>
          <div className='flex row mha-container animation slide'>
            <div className='mha-left'>
              <h2 className='animation slide'>Statistics</h2>
              <p>
                Statistics provides users with visual features to track trends in their overall
                health. Functionalities include the ability to view a line graph of selected moods
                or a bar graph of multiple selected moods.{' '}
              </p>
            </div>
            <div className='container mha-right'>
              <img src={Statistics} alt='Mental Health App' />
            </div>
          </div>
        </div>
        <div className='container '>
          <div className='flex row mha-container animation slide'>
            <div className='mha-left'>
              <h2 className='animation slide'>Search</h2>
              <p>
                Search allows users to locate past logs. Clicking on a search result pulls up the
                entire entry.
              </p>
            </div>
            <div className='container mha-right'>
              <img src={Search} alt='Mental Health App' />
              <img src={SearchDetail} alt='Mental Health App' />
            </div>
          </div>
        </div>
      </div>
      <div className='mha-peach-wrapper container column'>
        <div className='container'>
          <div className='flex row mha-container mha-content'>
            <div className='mha-left mha-left-full'>
              <h1>Mental Health App</h1>
              <h2>Shadowing Program Mentee @WiCSE</h2>
              <br />
              <h3>Project Overview</h3>
              <p>
                The Mental Health App was developed through the{' '}
                <strong>
                  Women in Computer Science & Engineering (WiCSE) Shadowing Programing
                </strong>
                . As part of the program, students were paired with an industry professional to
                create a project. For my project, I recieved the opportunity of working with a
                mentor from <strong>Opie Software</strong>.
              </p>
              <p>
                The inspiration for the project was to develop a{' '}
                <strong>full-stack application</strong> that allows users to track the progression
                of their mental health.{' '}
              </p>
              <br />
              <div className='two-column-table'>
                <div>
                  <h3>Timeline</h3>
                  <p>August 2020-December 2020</p>
                </div>
                <div>
                  <h3>Tech Stack</h3>
                  <p>JavaScript, React Native, Java, SQL, Hibernate, Spring Boot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container column '>
          <div className='flex row mha-container mha-content' id='mha-content-column'>
            <div className='mha-left mha-left-full'>
              <h2>Midpoint Status</h2>
              <p>
                This project posed a new challenge that I had not expected: <em>design</em>. I
                struggled with coming up with an idea for the look and feel of the project. My
                experience with UI design was little to none at this point. As a consequence, I
                chose a singular accent color, changed the border-radius, and kept it minimal. I
                thought that it would be enough just to change those few properties, believing that
                it would pass off as minimal.
              </p>
              <p>I soon came to a realization: it was not.</p>
              <h3>Analysis of Initial Design (Problems)</h3>
              <ul className='ul'>
                <li>
                  App was not visually appealing due to singular color; pages felt flat and did not
                  encourage engagement.
                </li>
                <li>
                  There were several issues related to <strong>consistency</strong>: [1] the
                  dropdown and input components have different stylings (border presence, border
                  color, and background color vary); [2] green elements use both black and white as
                  a text color; [3] buttons change in size across different pages.
                </li>
                <li>
                  <strong>User feedback</strong> highlighted an issue with the button affordance:
                  the x icon looks like an error rather than delete.
                </li>
              </ul>
              <h3>Goal</h3>
              <p>
                After re-evaluating my current progress, I decided to allot more attention to
                improving the design of the app.
              </p>
              <h3>How to Achieve Goal? Research?</h3>
              <p>
                To achieve this goal, I dedicated time to researching mobile apps and identifying
                various design approaches. I took note of all common{' '}
                <strong>design patterns</strong>, especially ones that made the apps look visually
                appealing.
              </p>
            </div>
            <div className='container' id='initial-img'>
              <img src={InitialDesign} alt='Mental Health App' />
              <img src={InitialDesign2} alt='Mental Health App' />
              <img src={InitialDesign3} alt='Mental Health App' />
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='flex row mha-container mha-content'>
            <div className='mha-left mha-left-full'>
              <h2>Conclusion</h2>
              <p>
                Overall, I felt proud of the product I created at the end. Learning how to create a
                full-stack application was daunting at first, but I uncovered my passion for app
                design from this experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='mha-blue-wrapper container '>
        <div className='flex row mha-container animation slide'>
          <div className='mha-left'>
            <h2 className='animation slide'>The Final Product</h2>
          </div>
          <div className='container mha-right'>
            <img src={MHAPreview} id='product-img' alt='Mental Health App' />
          </div>
        </div>
      </div>
      <div className='next-btn-container'>
        <a href='https://devpost.com/software/retrofi'>
          View next: RetroFi <BiLinkExternal />
          &nbsp;
        </a>
      </div>
      <GoToTop />
    </div>
  );
};

export default MHA;
