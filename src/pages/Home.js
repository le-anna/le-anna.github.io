import React, { useState, useEffect } from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';
import GoToTop from '../components/GoToTop'
import './Home.scss'

const Home = () => {
  const [isAll, setAll] = useState(true);
  const [isProject, setProject] = useState(false);
  const [isWork, setWork] = useState(false);

  const showAll = () => {
    setAll(!isAll);
    setWork(false);
    setProject(false);
  }

  const showProject = () => {
    setProject(!isProject);
    setAll(false);
    setWork(false);
  }

  const showWork = () => {
    setWork(!isWork);
    setAll(false);
    setProject(false);
  }

  useEffect(() => {
    if(!isWork && !isProject) {
      setAll(true);
    }
  });

  const projectsArray = [
    <ProjectOverview title='Mastercard' role='Software Engineer Intern' 
      description='Worked on design token integration to enable white labeling in the Connect website and Connect UI Library' 
      tech='TypeScript, React' link='/Choices' img='Mastercard'/>,
    <ProjectOverview title='Choices' role='UX Designer & Frontend Developer' 
      description='Design and implement the interface for Choices, an educational platform for people with Sickle Cell Disease or Traits' 
      tech='JavaScript, HTML, CSS (Sass)' link='/Choices' img='Choices'/>,
    <ProjectOverview title='CaSMM' role='Frontend Developer' description='Improved interface for CaSMM, a block-based
      programming environment for K-12 students to learn how to code Arduinos' tech='React, CSS (Less)' link='/CASMM' img='CASMM'/>,
    <ProjectOverview title='Mental Health App' role='Shadowing Program Mentee' description='Developed Mental Health App with  Opie Software
      through the Women in Computer Science & Engineering Shadowing Program' tech='Java, React Native, Hibernate, Spring Boot, SQL'
      link='/MentalHealthApp' img='MHA'/>,
    <ProjectOverview title='RetroFi' role='Hackthon Team Member' description='Won Capital One category for development of retro-themed
      financial application at SwampHacks (University of Florida)' tech='React, CSS' link='retrofi' img='retrofi'/>
  ];

  return (
    <div className='Home'>
      <Landing/>
      <div className='container row filter'>
        <button className='pill' id={isAll? 'selected' : 'unselected'} onClick={showAll}>All</button>
        <button className='pill' id={isProject? 'selected' : 'unselected'} onClick={showProject}>Projects</button>
        <button className='pill' id={isWork? 'selected' : 'unselected'} onClick={showWork}>Work</button>
      </div>
      <div id='projects'>
        { 
          isAll ? projectsArray : 
          isProject ? [projectsArray[2], projectsArray[3]] :
          isWork ? [projectsArray[0], projectsArray[1], projectsArray[2]] : projectsArray
        }
      </div>
      <GoToTop />
  </div>
  );
};

export default Home;
