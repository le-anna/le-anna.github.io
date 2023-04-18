import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import Logo from '../../assets/CASMM/casmm_logo.png';
import pg2img1 from '../../assets/CASMM/2-1.png';
import pg3img1 from '../../assets/CASMM/3-1.png';
import pg3img2 from '../../assets/CASMM/3-2.png';
import updatesimg1 from '../../assets/CASMM/4-1.png';
import updatesimg2 from '../../assets/CASMM/4-2.png';
import pg5img1 from '../../assets/CASMM/5-1.png';
import pg5img2 from '../../assets/CASMM/5-2.png';
import pg5img3 from '../../assets/CASMM/5-3.png';
import pg6img1 from '../../assets/CASMM/6-1.png';
import pg6img2 from '../../assets/CASMM/6-2.png';
import NewColor from '../../assets/CASMM/new-palette.png';
import './CASMM.scss';
import GoToTop from '../../components/GoToTop';
import { BsArrowRight } from 'react-icons/bs';

const CASMM = () => {
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
    <div className='casmm container column'>
      <div className='blue container column'>
        <div className='container casmm-blue row' id='casmm-landing'>
          <img src={Logo} id='casmm-logo' alt='CaSMM Logo' />
          <div id='casmm-landing-description'>
            <h1>CaSMM</h1>
            <h2>
              Front-end Developer <br />
              @University of Florida's Engaging Learning Lab
            </h2>
            <br />
            <p>
              Collaborated in the development of a block-based programming environment for K-12
              students to learn how to code Arduinos. Showcasing some of the contributions I made to
              the project.
            </p>
          </div>
        </div>
        <div className='container casmm-blue'>
          <div className='animation slide casmm-container'>
            <h2>Project Overview</h2>
            <div className='container row mobile'>
              <div className='flex column casmm-info'>
                <p>
                  CaSMM is developed by the University of Florida and Texas A&M with support from
                  the National Science Foundation and currently undergoes testing/research in
                  classrooms.
                </p>
                <h3>Role</h3>
                <p>
                  My role was to redesign the app using the style guide I created in 4 user roles
                  and develop styling for any new features.
                </p>
                <h3>Team</h3>
                <p>The team consisted of researchers and student developers.</p>
                <div className='two-column-table'>
                  <div>
                    <h3>Timeline</h3>
                    <p>April 2021-May 2022</p>
                  </div>
                  <div>
                    <h3>Tech</h3>
                    <p>React and CSS (Less)</p>
                  </div>
                </div>
              </div>
              <div className='casmm-info-img'>
                <img src={pg2img1} alt='CaSMM' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='yellow container column'>
        <div className='container casmm-yellow'>
          <div className='animation slide casmm-container'>
            <h2>Problems ❌</h2>
            <div className='container mobile'>
              <div className='flex column casmm-info'>
                <p>Here are some problems I identified in the intial design:</p>
                <ul className='ul'>
                  <li>
                    Color palette felt flat and lacked an accent color, which can be important in
                    helping elements stand out.
                  </li>
                  <li>
                    Buttons were gray, making their functionality difficult to identify. The shape
                    and style of the buttons also made them indistinguishable as action elements.
                  </li>
                  <li>Components, such as the cards and modules, were simple shapes.</li>
                  <li>
                    There was a lack of responsiveness among components, which resulted in them
                    overlapping.
                  </li>
                  <br />
                  <div id='color-container'>
                    <img src={pg3img2} id='color-img' alt='CaSMM' />
                    <p>Inital Color Palette</p>
                  </div>
                </ul>
              </div>
              <div className='casmm-info-img'>
                <img src={pg3img1} alt='CaSMM' />
              </div>
            </div>
          </div>
        </div>
        <div className='container casmm-yellow'>
          <div className='animation slide casmm-container-updates'>
            <h2>CaSMM Design System</h2>
            <p>
              The Principle Investigator expressed that certain features remain the same. While
              working on the redesign, I made sure to follow the existing design patterns that CaSMM
              already had.
            </p>
            <div className='container row updates-imgs'>
              <img src={updatesimg1} className='update-img' alt='CaSMM' />
              <div className='update-text'>
                <p>
                  Keep the existing <strong>color scheme</strong> and{' '}
                  <strong>modular layout</strong> (components encased in a white background to model
                  a learning module).
                </p>
              </div>
            </div>
            <div className='container row updates-imgs'>
              <div className='update-text'>
                <p>
                  Keep the blue subheading and make this consistent across all the views (at the
                  time, these were located in some of the pages).
                </p>
              </div>
              <img src={updatesimg2} className='update-img' alt='CaSMM' />
            </div>
          </div>
        </div>
        <div className='container casmm-yellow'>
          <div className='animation slide casmm-container-updates'>
            <h2>UX Design Process</h2>
            <h3>User Research 👩🏻‍💻</h3>
            <p>
              Users consists of 5th and 6th graders, content creators, mentors, and researchers.
              Research on various educational platforms for children highlighted a common theme: the
              use of vibrant colors. Brighter colors can feel more engaging, especially for the main
              target audience of the application: 5th and 6th grade students. During my research, I
              paid particular attention to several{' '}
              <strong> UX Design Principles: Consistency, Affordance, and Discoverability.</strong>
            </p>
            <h3>Solutions 💡</h3>
            <p>
              In the design solution, I proposed implementing an accent color in the new style
              guide. An accent color used specifically to denote action items would improve the{' '}
              <strong>discoverability</strong> of the element. In the original logo, a neon yellow
              was used in the design, so I pulled inspiration from that and used a duller yellow -
              eye-catching but not distracting. The Principle Investigator also wanted to maintain
              the color scheme, so yellow felt like a good solution to make the application feel
              more welcoming.
            </p>
            <p>
              Further, a change in button color and style would make it more{' '}
              <strong>consistent</strong> with buttons found in other applications. During
              development, much discussion revolved around ensuring the <strong>affordance</strong>{' '}
              of elements, so the students could easily identify them and understand their immediate
              use. Functionality of tools and elements had to be visibly evident.
            </p>
            <p>Image of color palette from style guide:</p>
            <div id='new-palette'>
              <img src={NewColor} />
            </div>
            <p>
              Style guide included: color palette, typography, walkthrough of different roles, and
              explanation of UI decisions.
            </p>
            <h3>New Features</h3>
            <p>
              {' '}
              In regard to developing new features, I worked closely with one of the researchers on
              the team. One of the features we worked on included adding nested modals, which would
              allow content creators to create a new lesson within the subwindow.
            </p>
          </div>
        </div>
        <div className='container casmm-yellow'>
          <div className='animation slide casmm-container-updates'>
            <h2>Solution: Mentor View</h2>
            <div className='container row updates-imgs'>
              <img src={pg5img1} className='update-img' alt='CaSMM' />
              <div className='flex-justify column update-text'>
                <h3>before</h3>
                <p>
                  This was the Mentor view before any changes were made to the design. The afforance
                  for the buttons is poor. The grey color and rectangular shape of the button are
                  not consistent with button designs found in other applications, which makes the
                  functionality ambiguous. Further, the button takes up a large portion of the card,
                  which is a poor use of the space. The text within the card is also small and not
                  readable.
                </p>
              </div>
            </div>
            <div className='container row updates-imgs' id='mobile-reverse'>
              <div className='flex-justify column update-text'>
                <h3>after</h3>
                <p>
                  The card was redesigned to improve readability. The content was divided up into
                  sections, allowing Mentors to quickly find the information they need. The
                  accessibility was also improved, as Mentors can now click on the Join Code (a
                  popup to display the code in classrooms for students) instead of having to click
                  on the View button to access it on another page. The new design of the card also
                  adds more dimension to it, making it more identifiable as a card component and not
                  just a simple shape.
                </p>
              </div>
              <img src={pg5img2} className='update-img' alt='CaSMM' />
            </div>
            <div className='container row updates-imgs'>
              <img src={pg5img3} className='update-img' alt='CaSMM' />
              <p className='flex-justify column update-text'>
                Image of the clickable Join Code in hover state.
              </p>
            </div>
          </div>
        </div>
        <div className='container casmm-yellow'>
          <div className='animation slide casmm-container-updates'>
            <h2>Solution: Roster View</h2>
            <div className='container updates-imgs'>
              <img src={pg6img1} className='update-img' alt='CaSMM' />
              <div className='flex-justify column update-text'>
                <h3>before</h3>
                <p>
                  The Roster view contains a grid of cards with information for each student. As
                  observed from the image, the Roster view shares a similar issue with the Mentor
                  view in regard to the buttons: poor affordance. The cards are also not responsive,
                  causing the features to overlap which makes the text indecipherable and buttons
                  unusable. The animal icon (which students use to login) is small, making it
                  difficult to recognize the animal associated with the student.
                </p>
              </div>
            </div>
            <div className='container row updates-imgs' id='mobile-reverse'>
              <div className='flex-justify column update-text'>
                <h3>after</h3>
                <p>
                  The redesign improved the responsiveness of the page. Further, the cards model the
                  layout of a profile page with the yellow color to represent the card header. The
                  icon size was increased so mentors can depict the animal used better.
                </p>
              </div>
              <img src={pg6img2} className='update-img' alt='CaSMM' />
            </div>
          </div>
        </div>
      </div>
      <div className='next-btn-container'>
        <Link to='/MentalHealthApp' className='link'>
          View next: Mental Health App <BsArrowRight />
        </Link>
      </div>
      <GoToTop />
    </div>
  );
};

export default CASMM;
