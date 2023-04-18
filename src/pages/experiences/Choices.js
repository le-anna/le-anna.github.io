import React from 'react';
import GoToTop from '../../components/GoToTop';
import { Link } from 'react-router-dom';
import './Choices.scss';
import InitialColor from '../../assets/Choices/Choices-initial-colors.png';
import NewColor from '../../assets/Choices/Choices-new-colors.png';
import Old1 from '../../assets/Choices/Choices-Old-1.png';
import Old2 from '../../assets/Choices/Choices-Old-2.png';
import NavIdea from '../../assets/Choices/Choices-Nav-Idea.png';
import Landing from '../../assets/Choices/Choices-Landing.png';
import RecruitmentLanding from '../../assets/Choices/Choices-Recruitment-Landing.png';
import Mockup1 from '../../assets/Choices/Choices-Mockup-1.png';
import Mockup2 from '../../assets/Choices/Choices-Mockup-2.png';
import Mockup3 from '../../assets/Choices/Choices-Mockup-3.png';
import Mockup4 from '../../assets/Choices/Choices-Mockup-4.png';
import Login from '../../assets/Choices/Choices-Login.png';
import Final1 from '../../assets/Choices/Choices-Final-1.png';
import Final2 from '../../assets/Choices/Choices-Final-2.png';
import Final3 from '../../assets/Choices/Choices-Final-3.png';
import Final4 from '../../assets/Choices/Choices-Final-4.png';
import Final5 from '../../assets/Choices/Choices-Final-5.png';
import ChoicesCover from '../../assets/Choices/choices.png';
import { BsArrowRight } from 'react-icons/bs';
// import { ChoicesCover } from '../../assets/assets'

const Choices = () => {
  return (
    <div className='container column choices'>
      <div className='flex-justify column choices-container'>
        <h1>Choices</h1>
        <h2>
          UX Designer & Front-end Developer <br />
          @University of Florida (College of Nursing) Sickle Cell Disease Lab
        </h2>
        <h3></h3>
        <div className='flex-justify choices-cover'>
          <img src={ChoicesCover} alt='Choices' />
        </div>
        <h3>Context</h3>
        <p>
          Choices is an educational tool developed through a research lab at the University of
          Florida's College of Nursing for people with sickle cell disease and trait. Some notes:
          (I) The study is currently ongoing; thus, some of the images/elements in the designs have
          been blurred out OR replaced by a placeholder due to the sensitivity of the information.
          (II) Not all designs developed are shown.
        </p>
        <h3>Role</h3>
        <p>
          I was the sole designer and developer, responsible for redesigning and implementing the
          interface.
        </p>
        <h3>Team</h3>
        <p>
          Collaboration occured between the College of Nursing and College of Computer and
          Information Science and Engineering.
        </p>
        <div className='two-column-table'>
          <div>
            <h3>Timeline</h3>
            <p>February 2022-February 2023</p>
          </div>
          <div>
            <h3>Tech</h3>
            <p>HTML, CSS (Sass), JavaScript, Git, Eclipse, Figma</p>
          </div>
        </div>
      </div>
      <div className='flex-justify column choices-container'>
        <h2>Previous Design Problems ❌</h2>
        <p>
          The previous application was developed around 2008, so the pages contained outdated
          styling.
        </p>
        <div className='flex-justify img-container choices-old-design'>
          <img src={Old1} alt='Choices Initial Design' />
        </div>
        <div className='flex-justify img-container  choices-old-design'>
          <img src={Old2} alt='Choices Initial Design' />
        </div>
        <h3>Analysis</h3>
        <ul>
          <li>
            Color scheme is not cohesive; the green/yellow shade does not pair well with the other
            two colors.
          </li>
          <li>
            Navigation bar does not clearly depict an application that follows a sequential mode of
            learning; the names on the tabs also do not fit well.
          </li>
          <li>
            Buttons are 3D, which stand out prominently on the page; 3D styled buttons are not
            common and need to be updated. The buttons are not consistent, as seen with the "Submit"
            and "Next" buttons.
          </li>
          <li>
            The interface contains many unneeded elements in a page, which can feel distracting to
            users: the green/yellow outline below the login inputs, the black bar below the next
            buttons on the second screen, and the green/yellow border at the top. These extra
            elements can make a page feel busy, taking away from the actual content.
          </li>
        </ul>
        <div className='flex-justify img-container choices-color'>
          <img src={InitialColor} alt='Choices Initial Color Scheme' />
        </div>
      </div>
      <div className='flex-justify column choices-container'>
        <h2>UX Design Process</h2>
        <h3>User Research 👩🏻‍💻</h3>
        <p>
          Research was conducted on developing an inclusive design for people with sickle cell
          disease. People with sickle cell disease are more likely to experience vision problems.
          Thus, research was important to fully understand the users and the constraints that may
          exist, and focus was placed on the web application’s{' '}
          <strong>readability and accessibility</strong>.
        </p>
        <h3>Solutions & High-fidelity Mockups 🎨</h3>
        <p>
          For the solution, I decided on a <strong>minimalistic design </strong>
          to <strong>centralize user focus on the tasks & content</strong>. This contrasts with the
          previous design, as it helps eliminate distractions for the user and makes the pages feel
          less busy. The project also had to be completed within a <strong>fast timeframe</strong>.
          Thus, a minimal design permits more time for debugging and further development of any
          additional features.
        </p>
        <p>
          I developed <strong>high-fidelity</strong> mockups with <strong>Figma</strong> for desktop
          and mobile views. Why high-fidelity? These mockups would more accurately represent the
          final solution and consequently allow for a better analysis of the application. Mockups
          underwent several iterations to consider the placement and appearance of all elements
          within a page. Several font types, font sizes, and line spacings were examined to ensure
          the most optimal solution. The team conducted review sessions several times a week to
          discuss the mockups. I developed approximately <strong>40 mockups</strong> during this
          stage.
        </p>
        <p>
          <strong>[RE: Old Color Scheme]</strong> I presented 3 options for color combinations that
          were similar to the old color scheme. The row with the star was agreed upon (yellow ended
          up being unneeded).
        </p>
        <div className='flex-justify img-container choices-color'>
          <img src={NewColor} alt='Choices Initial Color Scheme' />
        </div>
        <p>
          <strong>[RE: Buttons]</strong> Buttons were redesigned to follow a more modern and minimal
          style. Primary buttom = burnt orange. Secondary = grey.
        </p>
        <p>
          <strong>[RE: Navigation]</strong> I proposed two different implementations for the
          navigation; one that was similar to the original design, and a second that comprised of a
          complete redesign. The first idea is shown below.
        </p>
        <div className='flex-justify img-container  app-img'>
          <img src={NavIdea} alt='Choices Design' />
        </div>
        <p>
          I advocated for the second implementation, because I believed that it better demonstrated
          the sequential style of the app. As seen in the image below, the new navigation menu
          models that of a learning module. The team agreed, and we went with this route.
        </p>
        <div className='flex-justify img-container  app-img'>
          <img src={Mockup1} alt='Choices Design' />
        </div>
        <p>
          Additionally, I recommended using colors to denote progress. Colored circles indicate 3
          progress modes: <span id='green'>green = complete</span>,{' '}
          <span id='yellow'>yellow = in progress</span>, and{' '}
          <span id='gray'>gray = not available</span>.
        </p>
        <p>
          The simplistic background and card were designed to maintain a user's focus on the
          content. The cards consists of two sections, allowing the question and answer to stand out
          from each other.
        </p>
        <div className='flex-justify img-container  app-img'>
          <img src={Mockup2} alt='Choices Design' />
        </div>
        <h3>More mockups</h3>
        <div className='flex-justify img-container  app-img'>
          <img src={Landing} alt='Choices Design' />
        </div>
        <div className='flex-justify img-container  app-img'>
          <img src={RecruitmentLanding} alt='Choices Design' />
        </div>
        <div className='flex-justify img-container  app-img'>
          <img src={Login} alt='Choices Design' />
        </div>
        <div className='flex-justify img-container  app-img'>
          <img src={Mockup3} alt='Choices Design' />
        </div>
        <div className='flex-justify img-container  mobile-img'>
          <img src={Mockup4} alt='Choices Design' />
        </div>
      </div>
      <div className='flex-justify column choices-container'>
        <h2>Implementation 👩🏻‍💻</h2>
        <h3>Process</h3>
        <p>
          Data had to be pulled from the database, which meant that the designs had to work as a
          template. Along with different page layouts, I had to create styling for different types
          of data. A question, for instance, could have a number input, free response, or table with
          nested buttons. As another example, some content required media content while others did
          not.
        </p>
        <p>
          The overall implementation of the application did not take much time due to the
          high-fidelity mockups. I spent more time on refining the layout and debugging issues after
          testing with real data. A page could contain different typography elements, lists, popups,
          nested content, media, etc. Ergo, all the data had to be defined by HTML DOM elements - in
          total, this meant about <strong>100 pages</strong> of content. During implementation, the{' '}
          <strong>reponsiveness </strong>of features were tested to ensure content was{' '}
          <strong>readable</strong>.
        </p>
        <p>
          In order to streamline the development process, I developed one main Sass (CSS
          Preprocessor) file to customize the HTML DOM elements used in the application.
          Standardizing the elements ensured <strong>consistency</strong> throughout the
          application.
        </p>
        <h3>Road Bumps Encountered</h3>
        <p>
          It was tricky finding the best positioning for the virutal human videos, as the purpose
          was to supplement the material but not distract. After feedback from the team, we decided
          that the text should wrap the virtual human video at the bottom.
        </p>
        <p>
          Another bump I experienced was writing the code with HTML. The backend portion of the
          project used specific technologies that did not integrate well with frontend services like
          React. As a result, I used HTML and Sass, which were not as ideal for creating components
          and passing data between pages/elements.
        </p>
      </div>
      <div className='flex-justify column choices-container'>
        <h2>Finish Line (Concluding Work) 🏁</h2>
        <p>
          After the designs and implementation were completed, the rest of the work involved
          modifying the styling to adapt to real data from the database. Some other features (not in
          mockups) needed to be developed, as content was progressively approved for the study. The
          team <strong>tested</strong> the app several times throughout the process.
        </p>
        <h3>Some features I made:</h3>
        <p>
          Registration page, login page, navigation that shows users’ progress, card layout for
          questions, and content popups with mask overlay.
        </p>
      </div>
      <div className='flex-justify column choices-container'>
        <h2>Final Product 🎉 </h2>
        <div className='flex-justify img-container  app-img'>
          <img src={Final2} alt='Choices Final Design' />
        </div>
        <div className='flex-justify img-container  app-img'>
          <img src={Final1} alt='Choices Final Design' />
        </div>
        <div className='flex-justify img-container  app-img'>
          <img src={Final4} alt='Choices Final Design' />
        </div>
        <div className='flex-justify img-container  app-img'>
          <img src={Final5} alt='Choices Final Design' />
        </div>
        <div className='flex-justify img-container  mobile-img'>
          <img src={Final3} alt='Choices Final Design' />
        </div>
      </div>
      <div className='flex-justify column choices-container'>
        <h2>Learning Outcomes & Successes ✅</h2>
        <h3>Coding Conventions</h3>
        <p>
          From the project, I learned better coding conventions and how to write stylistic code
          efficiently. I had not worked with an application that used such a large amount of
          information before, so I was initially unsure of how to turn the designs into templates.
          Because pure HTML/CSS was being used, it was not possible to create custom components.
          However, I still wanted to be as organized as possible. Thus, I decided to create a main
          stylesheet that standardized the styling of the HTML DOM elements.
        </p>
        <h3>UX Design Process</h3>
        <p>
          The process of working on this project taught me a lot about UX Design. There were many
          conversations about things such as the most optimal placement or design of an element. The
          design process placed emphasis on ensuring accessible content, and the team referenced
          research papers about web application design.
        </p>
        <h3>Mockups -> Code</h3>
        <p>
          I was really excited to see how well I was able to translate my mockups into actual code!
          Developing high-fidelity mockups made the process of writing the code much faster.
        </p>
      </div>
      <div className='next-btn-container'>
        <Link to='/CaSMM' className='link'>
          View next: CaSMM <BsArrowRight />
        </Link>
      </div>
      <GoToTop />
    </div>
  );
};

export default Choices;
