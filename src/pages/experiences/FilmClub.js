import React from 'react';
import { Link } from 'react-router-dom';
import './FilmClub.scss';
import FigTokens from '../../assets/FilmClub/Tokens(Figma).png';
import JSTokens from '../../assets/FilmClub/Tokens(JS).png';
import FilmClubPrototype from '../../assets/FilmClub/FilmClubPrototype.gif';
import StyleGuide from '../../assets/FilmClub/StyleGuide.png';
import Data from '../../assets/FilmClub/Data.png';
import FilmClubImg from '../../assets/filmclub.png';
import PostInitial from '../../assets/FilmClub/PostInitial.png';
import FinalProduct from '../../assets/FilmClub/FinalProduct.png';
import GoToTop from '../../components/GoToTop';
import { BsArrowRight } from 'react-icons/bs';

const FilmClub = () => {
  return (
    <div className='container column club'>
      <div className='flex-justify column club-container'>
        <h1>Film Club</h1>
        <h2>
          UI Designer & Front-end Developer
          <br />
        </h2>
        <div className='flex-justify prototype'>
          <img src={FilmClubImg} alt='Film Club' id='demo' />
        </div>
        <br />
        <h3>Context</h3>
        <p>
          When it comes to reviews on movies and shows, people often resort to apps like Twitter or
          Reddit to express their thoughts, seeking community over the grievances or drama of a
          newly released piece. Film Club serves as an inclusive platform for people—professional or
          not—to discuss and track their films or shows on a single platform. The concept:{' '}
          <em>anyone</em> can be a critic.
        </p>
        <p>
          For this project, I had the <strong>goal</strong> of working with both design and code for
          development of Film Club. As such, I initially created prototypes in Figma and then later
          translated these prototypes into React Native. I{' '}
          <strong>only implemented the front-end side</strong> of the mobile app and tested the
          pages by passing in mock data.
        </p>
        <div className='two-column-table'>
          <div>
            <h3>Timeline</h3>
            <p>April 2023</p>
          </div>
          <div>
            <h3>Tech</h3>
            <p>Figma, React Native, JavaScript</p>
          </div>
        </div>
        {/* <h2>Sketches</h2> */}
        <h2>Design System 👩🏻‍🎨</h2>
        <h3>Style Guide</h3>
        <p>
          I developed a style guide to define the color palette, typography, and UI components. I
          decided on a dark UI, considering how people tend to immediately look up reviews after
          viewing a show or movie. Thus, a dark UI prevents people from straining their eyes in a
          dark room.
        </p>
        <div className='flex-justify prototype'>
          <img src={StyleGuide} alt='Film Club' id='styleguide' />
        </div>
        <h3>Design Tokens</h3>
        <p>
          I decided on using design tokens to ensure standardization across the screens. Design
          tokens also make it easier to assign colors to different elements while coding, using
          names instead of hex or rbg values. Here are examples of how I used design tokens for
          colors (Figma and in JS):
        </p>
        <div className='flex-justify img-container'>
          <img src={FigTokens} alt='Film Club' id='figTokens' />
          <img src={JSTokens} alt='Film Club' id='JSTokens' />
        </div>
        <h2>High-fidelity Prototypes</h2>
        <p>
          I made high-fidelity wireframes in Figma. I found that creating high-fidelity wireframes
          makes the coding process more efficient, as I don't have to focus on coming up with style
          or format of elements. Not only that, but I can easily adjust styles in Figma compared to
          code, where I would have to consider containers, format, and etc.
        </p>
        <p>
          The first screen shown below is the <strong>Landing</strong> page, which users see when
          they first open the app. Here, users have the option of <em>joining</em> or{' '}
          <em>signing in.</em>
          <br />
          <br />
          The second screen is the <strong>Feed</strong>; this is where users can view different
          reviews. The most prominent feature of this page is the tags (Pill component). The tags in
          each post highlight important details about the show or movie, and each color represents a
          different category. These colors increase <strong>recognition</strong>, allowing users to
          quickly identify relevant traits as they scroll. For instance,{' '}
          <strong id='pink'>pink</strong> indicates a movie title;{' '}
          <strong id='orange'>orange</strong> indicates a show title;{' '}
          <strong id='green'>green</strong> indicates a season, while{' '}
          <strong id='purple'>purple</strong> indicates an episode. The service (Netflix, Hulu, HBO,
          etc.) tag color is based on the standard branding of the service; again, this is to
          increase recognition while users scroll.
          <br />
          <br />
          The third prototype is the <strong>Movie Entry</strong>; this screen appears once users
          have saved a draft or published their review. The action button would change depending on
          whether the state of a post has been saved or published.
          <br />
          <br />
          The last screen is the <strong>Movie Entry</strong> page, which contains the user's
          watches (communities they follow for the movie and/or show), and all their reviews. This
          page also contains standard user information: number of followers, posts, and followings.
        </p>
        <div className='flex-justify prototype'>
          <img src={FilmClubPrototype} alt='Film Club' />
        </div>
        <h2>Development 👩🏻‍💻</h2>
        <p>
          I used React Native and JavaScript for the front-end implementation. In order to test if
          the pages would display and take in data properly (for instance, if the back-end were to
          be implemented), I created a very simple JSON file with mock data. Here is a short snippet
          of what it looks like:
        </p>
        <div className='flex-justify prototype'>
          <img src={Data} alt='Film Club' id='data' />
        </div>
        <p>
          I made several reusable components, similar to what I had defined in the style guide:
          Navigation, Post, Pill, and Stars. And, as this was a project focused on prototyping and
          coding the front-end side, I only implemented three pages: Feed, Movie Entry, and Profile.
        </p>
        <p>
          I started off with the Feed page, constructing the Post component that would make up a
          significant portion of the page. Below, I included an image of the initial process of me
          mapping out the various containers for the Post component with flex (React Native was an
          interesting framework to use, because there was not a Grid Layout Component):
        </p>
        <div className='flex-justify prototype'>
          <img src={PostInitial} alt='Film Club' id='data' />
        </div>
        <p>
          One of the <strong>most unexpected</strong> parts about coding this page proved to be the
          Pill component. For such a seemingly tiny aspect, the Pill component proved to be
          significant and thought-provoking—just because of how the component would have to adapt
          accordingly to the data and how frequent it would be called across the app.
        </p>
        <p>Overall, the Feed page was the most exciting for me to create!</p>
        <h3>Changes & Challenges</h3>
        <p>
          While implementing, I had to make <strong>2 modifications</strong> from the prototypes:
          [1] the icon styles (the package used in React Native did not offer the same ones used in
          Figma) and [2] the header height. During the prototyping stage, I had not considered the
          header height, which was already defined in React Native. As such, this caused the
          contents to shift down vertically.
        </p>
        <p>
          I experienced much difficulty implementing the background blur effect for the Movie Entry
          screen. On Figma, the effect was simple to execute: I lowered the opacity of the container
          and added the blur; however, on React Native, this was not as easy. I had installed a
          package to attempt replicating the blur effect as closely to the prototype as I could, but
          the colors of the image still do not show as prominently.
        </p>
        <h2>Concluding Thoughts 💭</h2>
        <p>
          I enjoyed working on this project immensely! Defining the high-fidelity prototypes in
          Figma played such a significant role in the coding stage, eliminating time spent on
          fretting over style/format. This enabled me to focus on figuring out how to execute
          certain things in the framework. In summary, I am content with the results of the final
          application. Some aspects of React Native proved to be tricky; however, I have learned
          much from this experience.{' '}
          <a href='https://github.com/le-anna/portfolio' className='nested-link'>
            Here
          </a>{' '}
          is the Github to the project if you're interested in checking it out!
        </p>
        <p>
          For <strong>next steps</strong>, I hope to continue working on the project—creating more
          screens and adding a back-end to the application to make it functional. Additionally, I
          would like the visit the idea of using TypeScript for this project, as I believe defining
          the styles via TypeScript could make the code more concise.
        </p>
        <h2>Final Product 🎉</h2>
        <div className='flex-justify prototype'>
          <img src={FinalProduct} alt='Film Club' />
        </div>
      </div>
      <div className='next-btn-container'>
        <Link to='/MentalHealthApp' className='link'>
          View next: Choices <BsArrowRight />
        </Link>
      </div>
      <GoToTop />
    </div>
  );
};

export default FilmClub;
