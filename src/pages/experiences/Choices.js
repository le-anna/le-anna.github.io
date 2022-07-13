import React from 'react'
import GoToTop from '../../components/GoToTop'
import { Link } from 'react-router-dom';
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

const Choices = () => {
  return (
    <div className='container column choices'>
       <div>
        <div className='choices-container'>
          <h2>Choices Case Study</h2>
          <p>Choices is an educational platform developed through the University of Florida's Sickle Cell Disease and Traits Research Lab
            for people with Sickle Cell Disease and Traits. The application serves as a learning tool for people participating in the Choices study. The group 
            working on the project consists of many people from various academic disciplines. I primarily worked with a smaller team for the development. 
            The application is one piece to the study, so I want to acknowledge that it contains curated content and work that many other members have put much time and 
            dedication into!
            <br/><br/>Some notes: (I) The <strong>study </strong> is currently <strong>ongoing</strong>; thus, some of the images/elements in the designs have been blurred
             out OR replaced by a placeholder due to the sensitivity of the information. 
             (II) Not all designs developed for the application are shown.
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
          <p>The previous application was developed around 2008 before being redeveloped in 2022, so some pages contained outdated styling.
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
            <li>Color scheme is not cohesive; the green/yellow shade does not pair well with the other two colors.</li>
            <li>Navigation bar does not clearly depict an application that follows a sequential mode of learning; 
              the names on the tabs also do not fit well.
            </li>
            <li>Buttons are 3D, which stand out prominently on the page; 
                3D styled buttons are not common and need to be updated. The buttons are not consistent, as seen with the "Submit" and "Next" buttons.
            </li>
            <li>
               The interface contains many unneeded elements in a page, which can feel distracting to users: 
               the green/yellow outline below the login inputs, the 
               black bar below the next buttons on the second screen, and the green/yellow border at the top. These extra elements can make a page
               feel busy, taking away from the actual content.
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
            prototypes, several font types, font sizes, and line spacings were examined to create the most optimal solution. During implementation, the <strong>reponsiveness </strong> 
            of features with zooming in and out were tested to ensure content was <strong>readable</strong>.
          </p>
          <br/>
          <h3>High-fidelity Mockups</h3>
          <p>
            I developed <strong>high-fidelity</strong> mockups with <strong>Figma</strong> for desktop and mobile views. High-fidelity mockups were developed because of their attention to detail; 
            these mockups would more accurately represent the final solution and consequently allow for a better analysis of the application. 
            Mockups underwent several iterations to consider the placement and appearance of all elements within a page.
            Review sessions were conducted several times a week to discuss the mockups. Approximately <strong>40 mockups</strong> were developed during this stage.
          </p>
        </div>
      <div className='choices-container'>
        <h2>Solutions 💡</h2>
        <p>
          For my solution, I decided on a <strong>minimalistic design</strong> for the application to <strong>centralize user focus on the tasks & content</strong>. This contrasts with 
          the prior design and helps eliminate distractions for the user. Moreover,
          the project had to be complete within a <strong>fast-paced timeframe</strong> for the study to begin on time. 
          As such, a minimal design permits more time for debugging and further development of any additional features.
        </p>
        <br/>
        <p>
          [RE: Old Color Scheme] I proposed color combinations options that were similar to the old color scheme.
          The row with the star was agreed upon (yellow ended up being unused). 
        </p>
        <div className='img-container choices-color'>
          <img src={NewColor} alt='Choices Initial Color Scheme'/>
        </div>
        <p>
          [RE: Buttons] The buttons were redesigned to follow a more modern and simplistic style, reducing the busyness on a page. 
        </p>
        <br/>
        <p>
          [RE: Navigation] To demonstrate the sequential nature of the application, the navigation menu was redesigned. As observed in the image below, the new navigation menu
          models a learning module. 
        </p>
        <br/>
        <p>
          Left cirlces indicate progress modes: <span id='green'>green = complete</span>, <span id='yellow'>yellow = in progress</span>, 
          and <span id='gray'>gray = not available</span>.
        </p>
        <div className='img-container app-img'>
          <img src={Mockup1} alt='Choices Initial Design'/>
        </div>
        <p>
          The simplistic background and card were designed to maintain a user's focus on the content. The cards consists of two sections, allowing
          the question and answer to stand out from each other.
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
        <h2>Development Process 👩🏻‍💻</h2>
        <p>Information had to be pulled from the database, which meant that the designs should work as a template.
           In total, this was about <strong>100 pages</strong> of content. Along with different page layouts,
           styling also had to created to consider data formats. A question, for instance, could have a 
           number input, free response, or table with nested buttons. For another example, some content required media content while others did not - these
           all had to be considered and styling had to be made to accomodate.
        </p>
        <br/>
        <p>
          In order to streamline the development process, I developed one main Sass (CSS Preprocessor) file to standardize all the tags that would be used in the application.
          Standardizing the tags ensured <strong>consistency</strong> throughout the application. I placed much focus on the <strong>responsiveness</strong> of the design.
        </p>
        <br/>
        <h3>Road Bumps Encountered</h3>
        <p>
          Virtual human videos were implemented to assist in the learning process for participants of the study. A video had to be
          included in all the informational and question pages with autoplay. It was tricky finding the best positioning for the virtual human video, as the purpose was to supplement the material but not distract. I developed several mockups of potential placements. After feedback and suggestions from the team, it was decided that the text should
          wrap the virtual human video at the bottom.
          <br/><br/>
          Another bump I experienced was writing the code with HTML. The backend portion of the project used specific technologies that did not integrate well with
          frontend services like React. As such, I used HTML and Sass, which were not as ideal for creating components and passing data between pages/elements.
        </p>
      </div>
      <div className='choices-container'>
        <h2>Finish Line (Concluding Work) 🏁</h2>
          <p>
            After the designs and implementation were completed, the rest of the work involved modifying the styling to adapt to real data from the database.
            Some other features (not in mockups) needed to be developed, as content was progressively approved for the study.
          </p>
          <br/>
          <h3>Some features I made:</h3>
          <p>
            Desktop and mobile screens<br/>
            Registration and Login page<br/>
            Navigation that shows users’ progress<br/>
            Card layout for questions<br/>
            Video popups with mask overlay<br/>
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
          <p>From the project, I learned better coding conventions and how to write stylistic code efficiently. 
            I had not worked with an application that used such a large amount of information before, 
            so I was initially unsure of how to turn the designs into templates.
            Because pure HTML/CSS was being used, it was not possible to create custom components. However, I still wanted to be as organized as possible.
            As a solution, I decided to create a main stylesheet that standardized the styling of the HTML DOM elements.
          </p>
          <br/>
          <h3>UX Process & Team</h3>
          <p>
            The process of working on this project taught me a lot about UX Design. There were many conversations 
            about things such as the most optimal placement or design of an element. 
            The design process placed emphasis on ensuring accessible content, and the team referenced 
            research papers about web application design. Additionally, this project consists of many people 
            (I worked on the Development Team as the only frontend developer), so it was
            a great learning experience when it came to coming up with ideas and presenting them to the team for a final decision.
          </p>
          <br/>
          <h3>Mockups -> Code</h3>
          <p>
            I was really excited to see how well I was able to translate my mockups into actual code! Developing 
            high-fidelity mockups made the process of writing the code much faster.
          </p>
        </div>
        </div>
      <div className='next-btn-container'>
         <Link to='/CaSMM' className='link'>View next: CaSMM -></Link>
      </div>
      <GoToTop />
    </div>
  )
}

export default Choices