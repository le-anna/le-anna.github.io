import React from 'react'
import GoToTop from '../components/GoToTop'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Choices.scss'
import InitialColor from '../assets/Choices/Choices-initial-colors.png'
import NewColor from '../assets/Choices/Choices-new-colors.png'
import Old1 from '../assets/Choices/Choices-Old-1.png'
import Old2 from '../assets/Choices/Choices-Old-2.png'
import Mockup1 from '../assets/Choices/Choices-Mockup-1.png'
import Mockup2 from '../assets/Choices/Choices-Mockup-2.png'
import Mockup3 from '../assets/Choices/Choices-Mockup-3.png'
import Mockup4 from '../assets/Choices/Choices-Mockup-4.png'
import Login from '../assets/Choices/Choices-Login.png'
import Final1 from '../assets/Choices/Choices-Final-1.png'
import Final2 from '../assets/Choices/Choices-Final-2.png'
import Final3 from '../assets/Choices/Choices-Final-3.png'

const Choices = () => {
  return (
    <div className='container column choices'>
       <div>
        <div className='choices-container'>
          <h2>Project Overview</h2>
          <p>Choices is an educational platform targeted towards people with Sickle Cell Disease and Traits and is developed through the 
            Sickle Cell Disease and Traits Lab at the University of Florida. The application serves as a learning tool for participants in the Choices study.
            The <strong>study </strong> 
            is <strong>currently ongoing</strong>; thus, some of the designs have been replaced by a placeholder due to the sensitivity of the information.
          </p>
          <br/>
          <h3>Frontend technologies</h3>
          <p>HTML, CSS (Sass), JavaScript</p>
          <br/>
          <h3>Role</h3>
          <p>UX Designer and Frontend Developer</p>
          <p>February 2022 - Present</p>
        </div>
        <div className='choices-container'>
          <h2>Previous Design & Problems</h2>
          <p>The previous application was developed around 2008; thus, some of the pages followed outdated styling. Note: some of the elements in the design
            have been blurred out.
          </p>
          <div class='img-container choices-old-design'>
            <img src={Old1} alt='Choices Initial Design'/>
          </div>
          <div class='img-container choices-old-design'>
            <img src={Old2} alt='Choices Initial Design'/>
          </div>
          <br/>
          <h3>Problems</h3>
          <ul>
            <li>Navigation bar does not clearly depict an application that follows a sequential mode of learning; 
              the names on the tabs also do not fit well.
            </li>
            <li>Buttons are 3D, which stand out prominently on page and can distract users from the material; 
                3D styled buttons are not common and need to be updated.
            </li>
            <li>Color scheme is not cohesive due to the green/yellow color used as an accent.</li>
          </ul>
          <div className='img-container choices-color'>
            <img src={InitialColor} alt='Choices Initial Color Scheme'/>
          </div>
          <br/>
        </div>
        <div className='choices-container'>
          <h2>Design Process & High-fidelity Mockups</h2>
          <h3>User Research</h3>
          <p>
            Research was conducted on developing an inclusive design for people with Sickle Cell Disease. People with Sickle Cell Disease
            are more likely to experience vision problems. Thus, focus was placed on the web application’s <strong>readability and accessibility</strong>. When developing
            prototypes, several font types, font sizes, and line spacings were examined to develop the most optimal solution.
          </p>
          <br/>
          <h3>High-fidelity Mockups</h3>
          <p>
            I developed high-fidelity mockups with <strong>Figma</strong> for desktop and mobile views. High-fidelity mockups were developed because of their details, 
            as this would provide a close idea of the final solution and consequently allow a better analysis of the application's readability. 
            Mockups underwent several iterations to consider the placement and appearance of all elements within a page.
            Review sessions were conducted several times a week to discuss the mockups. Approximately <strong>40 screens</strong> were developed during this stage.
          </p>
          <br/>
          <h3>Solutions</h3>
          <p>
            I propsed various ideas for color combinations that were similar to the old color scheme.
            The row with the star was the one that was decided upon; however, during designing, we decided that there was not a need for a yellow color. 
          </p>
          <div className='img-container choices-color'>
            <img src={NewColor} alt='Choices Initial Color Scheme'/>
          </div>
          <br/>
          <p>
           To demonstrate the sequential nature of the application, the navigation menu was redesigned. As observed in the image below, the new navigation menu
           models that of a learning module. 
          </p>
           <br/>
           <p>
           The circles to the left indicate several progress modes: <span id='green'>green = complete</span>, <span id='yellow'>yellow = in progress</span>, 
           and <span id='gray'>gray = not available</span>.
          </p>
          <div class='img-container app-img'>
            <img src={Mockup1} alt='Choices Initial Design'/>
          </div>
          <p>
            The simplistic background and card for the question was designed to maintain a user's focus on the content. The cards were designed into two sections
            to make the question and answer portion stand out from each other.
          </p>
          <div class='img-container app-img'>
            <img src={Mockup2} alt='Choices Initial Design'/>
          </div>
          <p>More designs (Note: not all mockups have been included)</p>
          <div class='img-container app-img'>
            <img src={Login} alt='Choices Initial Design'/>
          </div>
          <div class='img-container app-img'>
            <img src={Mockup3} alt='Choices Initial Design'/>
          </div>
          <div class='img-container mobile-img'>
            <img src={Mockup4} alt='Choices Initial Design'/>
          </div>
        </div>
        <div className='choices-container'>
          <h2>Development Process</h2>
          <p>Key note: Information would be pulled from the database; this meant that the designs needed to be developed as a template. As I was writing the code for the
            styling, I had to ensure that, once the information was pulled from the database, the styling on the template would apply correctly. In total, this meant about <strong>100 pages</strong> of information.
          </p>
          <br/>
          <p>
            In order to streamline the process, I developed one main .Sass (CSS Preprocessor) file to standardize all the tags that would be used in the application.
            Standardizing the tags ensured the <strong>consistency</strong> of the application.
          </p>
          <br/>
          <h3>Bumps Encountered</h3>
          <p>
            To assist in conveying the content in the study, the use of virtual human videos were implemented in the application. The video needed to be included
            in all the informational pages and question pages. It was tricky finding the best positioning for the virtual human, especially because the video should
            not be distracting to users, as its purpose is to supplement. I developed several mockups of potential placements. After feedback and suggestions from the team, it was decided that the text should
            wrap the virtual human at the bottom of the pages with content.
            <br/><br/>
            Another bump I experienced was writing some of the code with HTML. The backend portion of the project used specific technologies that made it difficult to
            implement frontend services like React; thus, I used HTML and CSS to create the layout.
          </p>
          <br/>
          <h3>Concluding Work</h3>
          <p>
            After the designs and implementation of the website was completed, the rest of the work involved modifying the styling to adapt to actual content from the database.
            Some other features (not in mockups) needed to be developed, as content continued to be approved and reviewed for the study.
            The final application differed from the mockups in minimal ways (added navigation bar and removed arrow to slide out navigation), as we adjusted to new user needs
            accordingly.
          </p>
          <br/>
          <h3>Features I developed:</h3>
          <p>
            Desktop and mobile screens.<br/>
            Registration and Login page.<br/>
            Navigation that displays the users’ progress through the learning material.<br/>
            Cards for questions that maintain the user’s focus on the question and answer.<br/>
            Video popups, including a mask overlay.<br/>
          </p>
        </div>
        <div className='choices-container'>
          <h2>Final Product</h2>
          <div class='img-container app-img'>
            <img src={Final2} alt='Choices Final Design'/>
          </div>
          <div class='img-container app-img'>
            <img src={Final1} alt='Choices Final Design'/>
          </div>
          <div class='img-container mobile-img'>
            <img src={Final3} alt='Choices Final Design'/>
          </div>
        </div>
        <div className='choices-container'>
          <h2>Learning Outcomes</h2>
          <p>Through the development of this application, I learned how to develop better coding conventions. For instance,
            I created a main stylesheet that standardized the formatting and styling for many of the components. Additionally,
            I had never worked with an application that used such a large amount of information before. I was initially unsure of how
            to implement the designs in a way that would allow them to serve as templates for the information; however, with discussion and ideas from the 
            entire lab, we came with a solution that worked. 

          </p>
          <br/>
          <p>
            Aside from the development of the application, the process of this project taught me a lot about UX Design. There were many conversations 
            revolving around the most optimal placement or design of an element. The design process also placed much emphasis on ensuring that the information
            was accessible. Additionally, this project comprises a significant amount of people (I worked on the Development Team), and it was exciting
            seeing how various people were coming together to create the project; this especially when developing the designs, as I had to develop several ideas and
            present them for a final decision.
          </p>
        </div>
        <Link to='/CaSMM' className='link'>Click to View: CaSMM <FaArrowRight/></Link>
        </div>
        <GoToTop />
    </div>
  )
}

export default Choices