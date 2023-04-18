import React, { useState, useEffect } from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';
import GoToTop from '../components/GoToTop';
import './Home.scss';

const Home = () => {
  const [isAll, setAll] = useState(true);
  const [isProject, setProject] = useState(false);
  const [isWork, setWork] = useState(false);

  const showAll = () => {
    setAll(!isAll);
    setWork(false);
    setProject(false);
  };

  const showProject = () => {
    setProject(!isProject);
    setAll(false);
    setWork(false);
  };

  const showWork = () => {
    setWork(!isWork);
    setProject(false);
    setAll(false);
  };

  useEffect(() => {
    if (!isWork && !isProject) {
      setAll(true);
    }
  });

  const projectsArray = [
    <ProjectOverview
      title='Mastercard'
      role='Software Engineer Intern'
      description='Integrated design tokens into the Connect website and Connect UI library to provide white labeling and multilingual support.'
      tech={['TypeScript', 'React']}
      link='/Choices'
      img='Mastercard'
    />,
    <ProjectOverview
      title='Choices'
      role='UX Designer & Front-end Developer'
      description='Designed and implemented the interface for Choices, an educational platform for people with Sickle Cell Disease or Traits. Developed under the Sickle Cell Lab at the College of Nursing, University of Florida, for use in studies.'
      tech={['JavaScript', 'HTML', 'CSS']}
      link='/Choices'
      img='Choices'
    />,
    <ProjectOverview
      title='CaSMM'
      role='Front-end Developer'
      description='Improved the interface for CaSMM, a block-based
      programming environment for 5th and 6th grade students to learn how to code Arduinos. Implemented into classrooms by the Engaging Learning Lab at the University of Florida.'
      tech={['JavaScript', 'React', 'Less']}
      link='/CASMM'
      img='CASMM'
    />,
    <ProjectOverview
      title='Mental Health App'
      role='Shadowing Program Mentee'
      description='Developed a full-stack application with Opie Software
      through the Women in Computer Science & Engineering Shadowing Program. Built with idea of allowing users to track their mental health by analyzing trends.'
      tech={['Java', 'React Native', 'Spring Boot']}
      link='/MentalHealthApp'
      img='MHA'
    />,
    <ProjectOverview
      title='RetroFi'
      role='Hackthon Team Member'
      description='Won the Capital One category for development of retro-themed
      financial application at SwampHacks (University of Florida Hackathon). Created to address the financial illiteracy of college students.'
      tech={['JavaScript', 'React', 'CSS']}
      link='retrofi'
      img='retrofi'
    />,
  ];

  return (
    <div className='Home'>
      <Landing />
      <div className='container row filter'>
        <button className='pill' id={isAll ? 'selected' : 'unselected'} onClick={showAll}>
          All
        </button>
        <button className='pill' id={isWork ? 'selected' : 'unselected'} onClick={showWork}>
          Work
        </button>
        <button className='pill' id={isProject ? 'selected' : 'unselected'} onClick={showProject}>
          Projects
        </button>
      </div>
      <div className='grid column' id='projects'>
        {isAll
          ? projectsArray
          : isWork
          ? [projectsArray[0], projectsArray[1], projectsArray[2]]
          : isProject
          ? [projectsArray[3], projectsArray[4]]
          : projectsArray}
      </div>
      <GoToTop />
    </div>
  );
};

export default Home;
