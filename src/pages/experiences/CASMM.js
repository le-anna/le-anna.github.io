import React from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom';
import Logo from '../../assets/CASMM/casmm_logo.png'
import pg2img1 from '../../assets/CASMM/2-1.png'
import pg3img1 from '../../assets/CASMM/3-1.png'
import pg3img2 from '../../assets/CASMM/3-2.png'
import updatesimg1 from '../../assets/CASMM/4-1.png'
import updatesimg2 from '../../assets/CASMM/4-2.png'
import pg5img1 from '../../assets/CASMM/5-1.png'
import pg5img2 from '../../assets/CASMM/5-2.png'
import pg5img3 from '../../assets/CASMM/5-3.png'
import pg6img1 from '../../assets/CASMM/6-1.png'
import pg6img2 from '../../assets/CASMM/6-2.png'
import './CASMM.scss'
import GoToTop from '../../components/GoToTop'

const CASMM = () => {

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
    <div className='casmm container column'>
      <div className='container row' id='casmm-landing'>
        <img src={Logo} id='casmm-logo' alt='CaSMM Logo'/>
        <div id='casmm-landing-description'>
          <p>
            Collaborate in the development of a block-based programming environment 
            for K-12 students to learn how to code Arduinos.
            <br/><br/>
            Showcasing some of the improvements that I have contributed to the project.
          </p>   
          <br/>
        </div>
      </div>

      <div className='container casmm-blue'>
        <div className='casmm-container'>
          <h2 className='animation slide'>Project Overview</h2>
          <div className='animation slide container row casmm-info-container'>
            <div className='casmm-info-content'>
              <p>
                CaSMM is developed by the University of Florida and Texas A&M with support from 
                the National Science Foundation and is currently undergoing testing/research in classrooms. Users include 5th and 6th graders, content
                creators, mentors, and researchers. Our work on the project was done during implementation in classrooms and breaks. 
                Collaboration in the team occured between researchers and developers. 
                <br/><br/>
                
                CaSMM was an in-progress project when I joined. The main focus on the project
                had been developing features and working on the functionality; thus, I became part of the team to 
                improve the user interface. During my time on the project, I progressively worked on making the UI changes to the application 
                (focusing on a role at a time) and added any needed features/styling. 
              <br/><br/>
              </p>
              <br/>
              <p> <strong>Frontend technologies</strong></p>
              <p>React.js and CSS (.less)</p>
              <br/>
              <p> <strong>Role</strong></p>
              <p>Frontend Developer <br/> April 2021 - May 2022</p>
            </div>
            <div className='casmm-info-img'>
              <img src={pg2img1} alt='CaSMM'/>
            </div>
          </div>
        </div>
      </div>

      <div className='container casmm-yellow'>
        <div className='casmm-container'>
          <h2 className='animation slide'>Problems</h2>
          <div className='animation slide container casmm-info-container'>
            <div className='casmm-info-content'>
             <p>
              Here are some problems I identified in the intial design:
             </p>
             <br/>
              <ul className='ul'>
                <li>Color palette lacked an accent color, which can be important in helping elements stand out.</li>
                <li>Buttons were gray, making their functionality difficult to identify.</li>
                <li>Components were simple shapes.</li>
                <li>There was a lack of responsiveness among components, which resulted in overlap.</li>
                <br/>
                <div id='color-container'>
                  <img src={pg3img2} id='color-img' alt='CaSMM'/>
                  <p>Inital Color Palette</p>
                </div>
              </ul>
            </div>
            <div className='casmm-info-img'>
              <img src={pg3img1} alt='CaSMM'/>
            </div>
          </div>
        </div>
      </div>

      <div className='container casmm-yellow'>
        <div className='casmm-container-updates'>
          <h2 className='animation slide'>Requirements</h2>
          <p className='animation slide'>Some features from the original design that 
            the Principle Investigator wanted to maintain in the redesign.</p>
          <div className='animation slide container row updates-img-container'>
            <img src={updatesimg1} className='updatesimg' alt='CaSMM'/>
            <p className='updatesimg-text'>Keep the existing color scheme and modular layout (components encased in a white background to model a learning module).</p>
          </div>
          <div className='animation slide container row updates-img-container'>
            <p className='updatesimg-text'>Keep the blue subheading and make this consistent across all the views (located in some of the pages at this times).</p>
            <img src={updatesimg2} className='updatesimg' alt='CaSMM'/>
          </div>
        </div>
      </div>

      <div className='container casmm-yellow'>
        <div className='casmm-container-updates'>
          <h2 className='animation slide'>Process</h2>
          <p className='animation slide'>Research on various educational platforms for children highlight a common theme: the use of vibrant colors.  Brighter colors are more engaging, especially to the specific target audience; in this case, 5th 
          and 6th grade students.
          <br/> <br/> 
          I paid particular attention to several <strong> UX Design Principles: Consistency, Affordance, and Discoverability.</strong>
          <br/> <br/> 
          In the design solution, I proposed implementing an accent color in the new style guide. 
          An accent color used specifically to denote clickable items would improve the discoverability of the element. As well, the change in button style would
          make it more consistent to buttons found in other applications. During development, much discussion revolved around ensuring the affordance of elements, so students could easily identify them.
          The rest of my work involved improving the UI to fit the style guide.
          </p>
        </div>
      </div>

      <div className='container casmm-yellow'>
        <div className='casmm-container-updates'>
          <h2 className='animation slide'>Solution: Mentor View</h2>
          <div className='animation slide container row updates-img-container'>
            <img src={pg5img1} className='updatesimg' alt='CaSMM'/> 
            <div className='updatesimg-text'>
              <h3>before</h3>
              <p>
                This was the Mentor view before any changes were made to the design. The afforance
                for the buttons is poor. The grey color and rectangular shape of the button is not consistent with other designs for buttons found in other applications, which makes the functionality ambiguous. The text within the box is also small and not readable.
              </p>
            </div>
          </div>
          <div className='animation slide container row updates-img-container' id='mobile-reverse'>
            <div className='updatesimg-text'>
              <h3>after</h3>
              <p>
                The card was redesigned to improve readability. The content was divided up into sections, allowing Mentors to quickly find the information they need. The accessibility was also improved, as Mentors can now click on the Join Code (a popup to display the code in classrooms for students) 
                instead of having to click on the View button to access it on another page.
              </p>
            </div>
            <img src={pg5img2} className='updatesimg' alt='CaSMM'/>
          </div>
          <div className='animation slide container row updates-img-container'>
            <img src={pg5img3} className='updatesimg' alt='CaSMM'/>
            <p className='updatesimg-text'>Image of the clickable Join Code.</p>
          </div>
        </div>
      </div>
       
      <div className='container casmm-yellow'>
        <div className='casmm-container-updates'>
          <h2 className='animation slide'>Solution: Roster View</h2>
          <div className='animation slide container updates-img-container'>
            <img src={pg6img1} className='updatesimg' alt='CaSMM'/>
            <div className='updatesimg-text'>
              <h3>before</h3>
              <p>The Roster view contains a grid of cards with information for each student. As observed from the image,
              the Roster view shares a similar issue with the Mentor view in regard to the buttons: poor affordance. The cards are also not responsive, 
              causing the features to overlap which makes the text indecipherable.
              </p>
            </div>
          </div>
          <div className='animation slide container row updates-img-container' id='mobile-reverse'>
            <div className='updatesimg-text'>
              <h3>after</h3>
              <p>The redesign improved the responsiveness of the page. Further, the cards model the layout of a profile page
              with the yellow color to represent the header. The size of the icon was also increased, so Mentors can identify the image better.
              </p>
            </div>
            <img src={pg6img2} className='updatesimg' alt='CaSMM'/>
          </div>
        </div>
      </div>
      <div className='next-btn-container'>
         <Link to='/MentalHealthApp' className='link'>View next: Mental Health App -></Link>
      </div>
      <GoToTop />
    </div>
  )
}

export default CASMM