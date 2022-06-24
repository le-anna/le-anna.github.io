import React from 'react'
import GoToTop from '../../components/GoToTop'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Choices.scss'
import InitialColor from '../../assets/Choices/Choices-initial-colors.png'
import NewColor from '../../assets/Choices/Choices-new-colors.png'
import Old1 from '../../assets/Choices/Choices-Old-1.png'
import Old2 from '../../assets/Choices/Choices-Old-2.png'
import Mockup1 from '../../assets/Choices/Choices-Mockup-1.png'
import Mockup2 from '../../assets/Choices/Choices-Mockup-2.png'
import Mockup3 from '../../assets/Choices/Choices-Mockup-3.png'
import Mockup4 from '../../assets/Choices/Choices-Mockup-4.png'
import Login from '../../assets/Choices/Choices-Login.png'
import Final1 from '../../assets/Choices/Choices-Final-1.png'
import Final2 from '../../assets/Choices/Choices-Final-2.png'
import Final3 from '../../assets/Choices/Choices-Final-3.png'
import Final4 from '../../assets/Choices/Choices-Final-4.png'
import Typewriter from 'typewriter-effect';
// typewriter effect source: https://github.com/tameemsafi/typewriterjs

const Choices = () => {
  return (
    <div className='container column choices'>
       <div>
        <div className='choices-container'>
          <h2>Choices Project Overview</h2>
          <p>Choices is an educational platform developed through the University of Florida's Sickle Cell Disease and Traits Research Lab
            for people with Sickle Cell Disease and Traits. The application serves as a learning tool for people participating in the Choices study.
            <br/><br/>Some notes: (I) The <strong>study </strong> is currently <strong>ongoing</strong>; thus, some of the images/elements in the designs have been blurred
             out OR replaced by a placeholder due to the sensitivity of the information. 
             (II) Not all designs developed for the application will be shown.
          </p>
          <br/>
          <h3>Frontend technologies</h3>
          <p><strong>HTML, CSS (Sass), JavaScript</strong></p>
          <br/>
          <h3>Role</h3>
          <p><strong>UX Designer</strong> and <strong>Frontend Developer</strong></p>
          <p>February 2022 - Present</p>
        </div>
        <div className='choices-container'>
          <h2>Previous Design & Problems ❌</h2>
          <p>The previous application was developed around 2008 before being developed again in 2022; thus, some of the pages contained outdated styling as shown below. 
          </p>
          <div className='img-container choices-old-design'>
            <img src={Old1} alt='Choices Initial Design'/>
          </div>
          <div className='img-container choices-old-design'>
            <img src={Old2} alt='Choices Initial Design'/>
          </div>
          <br/>
          <h3>Problems</h3>
          <ul>
            <li>Color scheme is not cohesive due to the green/yellow color used as an accent.</li>
            <li>Navigation bar does not clearly depict an application that follows a sequential mode of learning; 
              the names on the tabs also do not fit well.
            </li>
            <li>Buttons are 3D, which stand out prominently on the page and can distract users from the material; 
                3D styled buttons are not common and need to be updated. The buttons are not consistent, as seen with the "Submit" and "Next" buttons.
            </li>
            <li>
               The interface contains extraneous elements that are not necessary: the green/yellow outline below the login inputs, the 
               black bar below the next buttons on the second screen and green/yellow border at the top.
            </li>
          </ul>
          <div className='img-container choices-color'>
            <img src={InitialColor} alt='Choices Initial Color Scheme'/>
          </div>
          <br/>
        </div>
        <div className='choices-container'>
          <h2>Design Process & High-fidelity Mockups 🎨</h2>
          <h3>User Research</h3>
          <p>
            Research was conducted on developing an inclusive design for people with Sickle Cell Disease. People with Sickle Cell Disease
            are more likely to experience vision problems. Thus, focus was placed on the web application’s <strong>readability and accessibility</strong>. When developing
            prototypes, several font types, font sizes, and line spacings were examined to develop the most optimal solution.
          </p>
          <br/>
          <h3>High-fidelity Mockups</h3>
          <p>
            I developed <strong>high-fidelity</strong> mockups with <strong>Figma</strong> for desktop and mobile views. High-fidelity mockups were developed because of their details, 
            as this would accurately represent the final solution and consequently allow a better analysis of the application's readability. 
            Mockups underwent several iterations to consider the placement and appearance of all elements within a page.
            Review sessions were conducted several times a week to discuss the mockups. Approximately <strong>40 mockups</strong> were developed during this stage.
          </p>
        </div>
      <div className='choices-container'>
        <h2>Solutions 💡</h2>
          <p>
            [RE: Old Color Scheme] I propsed various ideas for color combinations that were similar to the old color scheme.
            The row with the star was the one that was decided upon; however, during designing, we decided that there was not a need for a yellow color. 
          </p>
          <div className='img-container choices-color'>
            <img src={NewColor} alt='Choices Initial Color Scheme'/>
          </div>
           <p>
             [RE: Buttons] The buttons were redesigned to follow a more modern and simplistic style.
           </p>
           <br/>
           <p>
           [RE: Navigation] To demonstrate the sequential nature of the application, the navigation menu was redesigned. As observed in the image below, the new navigation menu
           models a learning module. 
          </p>
           <br/>
           <p>
           The circles to the left indicate several progress modes: <span id='green'>green = complete</span>, <span id='yellow'>yellow = in progress</span>, 
           and <span id='gray'>gray = not available</span>.
          </p>
          
          <div className='img-container app-img'>
            <img src={Mockup1} alt='Choices Initial Design'/>
          </div>
          <p>
            The simplistic background and card to contain the question & answers were designed to maintain a user's focus on the content. The cards were designed into two sections
            to make the question and answer portion stand out from each other.
          </p>
          <div className='img-container app-img'>
            <img src={Mockup2} alt='Choices Initial Design'/>
          </div>
          <h3>More designs</h3>
          <div className='img-container app-img'>
            <img src={Login} alt='Choices Initial Design'/>
          </div>
          <div className='img-container app-img'>
            <img src={Mockup3} alt='Choices Initial Design'/>
          </div>
          <div className='img-container mobile-img'>
            <img src={Mockup4} alt='Choices Initial Design'/>
          </div>
        </div>
        <div className='choices-container'>
          <h2>Development Process 💻</h2>
          <p>Key note: Information would be pulled from the database; this meant that the designs needed to be developed as a template. As I was writing the code for the
            styling, I had to ensure that, once the information was pulled from the database, the template would apply the styling correctly. In total, this meant about <strong>100 pages</strong> of content.
          </p>
          <br/>
          <p>
            In order to streamline the development process, I developed one main .Sass (CSS Preprocessor) file to standardize all the tags that would be used in the application.
            Standardizing the tags ensured <strong>consistency</strong> throughout the application.
          </p>
          <br/>
          <h3>Road Bumps Encountered</h3>
          <p>
            To assist in the learning process, the use of virtual human videos were implemented in the application. A video had to be included
            in all the informational and question pages. It was tricky finding the best positioning for the virtual human, especially because the video should
            not be distracting to users, as its purpose is to supplement the material. I developed several mockups of potential placements. After feedback and suggestions from the team, it was decided that the text should
            wrap the virtual human at the bottom of the pages with content .
            <br/><br/>
            Another bump I experienced was writing some of the code with HTML. The backend portion of the project used specific technologies that made it difficult to
            implement frontend services like React; thus, I used HTML and CSS to create the layout. HTML made it difficult to create components and pass information between pages/components.
          </p>
        </div>
        <div className='choices-container'>
          <h2>Finish Line (Concluding Work) 🏁</h2>
            <p>
              After the designs and implementation of the website were completed, the rest of the work involved modifying the styling to adapt to real data from the database.
              Some other features (not in mockups) needed to be developed, as content continued to be approved and reviewed for the study.
              The final application differed from the mockups in minimal ways (added navigation bar and removed arrow to slide out navigation), as we adjusted to new user needs
              accordingly.
            </p>
            <br/>
            <h3>Features I developed:</h3>
            <p>
              Desktop and mobile screens.<br/>
              Registration and Login page.<br/>
              Navigation that displays users’ progress.<br/>
              Card layout for questions.<br/>
              Video popups, including a mask overlay.<br/>
            </p>
        </div>
        <div className='choices-container'>
          <h2>Final Product 🎉 </h2>
          <div className='img-container app-img'>
            <img src={Final2} alt='Choices Final Design'/>
          </div>
          <div className='img-container app-img'>
            <img src={Final1} alt='Choices Final Design'/>
          </div>
          <div className='img-container app-img'>
            <img src={Final4} alt='Choices Final Design'/>
          </div>
          <div className='img-container mobile-img'>
            <img src={Final3} alt='Choices Final Design'/>
          </div>
        </div>
        <div className='choices-container'>
          <h2>Learning Outcomes & Successes ✅</h2>
          <h3>Coding Conventions & Templates</h3>
          <p>Working on the project, I learned better coding conventions and how to write styling code efficiently. For instance,
            I created a main stylesheet that standardized the formatting and styling of typography tags and components. 
            I had not worked with an application that used such a large amount of information before or one that required templates, 
            so I was initially unsure of how to implement the designs in a way that would allow them to serve as templates for the information.
            Just like developing reusable components in React, the same principle applied here with creating the web pages.
          </p>
          <br/>
          <h3>UX Process & Team</h3>
          <p>
            Aside from the development of the application, the process of this project taught me a lot about UX Design. There were many conversations 
            revolving around things such as the most optimal placement or the design of an element. 
            The design process placed emphasis on ensuring that the content was accessible, and the team referenced many research papers about web application design. Additionally, this project consists of many people 
            (I worked on the Development Team as the only frontend developer), so it was
            a great learning experience when it came to coming up with ideas and presenting them to the team for a final decision.
          </p>
          <br/>
          <h3>Mockups -> Code</h3>
          <p>
            I was really excited to see how well I was able to translate my mockups to actual code! Developing high-fidelity mockups made the process of writing the code much faster,
            despite the mockups taking more time to create.
          </p>
        </div>
        <Link to='/CaSMM' className='link'>Click to View: CaSMM <FaArrowRight/></Link>
        </div>
        <GoToTop />
    </div>
  )
}

export default Choices