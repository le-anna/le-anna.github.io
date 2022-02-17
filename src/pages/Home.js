import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div className='Home'>
        <Landing/>
        <ProjectOverview type='Work' title='CaSMM' description='Redesigned the interface for CaSMM, a block-based
                programming environment for K-12 students to learn how to code Arduinos' link='/CASMM'/>
        <ProjectOverview type='Shadowing Program' title='Mental Health App' description='Developed Mental Health App with  Opie Software
                through the Women in Computer Science Engineering Shadowing Program' link='/MentalHealthApp'/>
        <ProjectOverview type='Work' title='Choices' description='Designing the website for 
                Choices, an educational platform for individuals with Sickle Cell Disease or Traits to 
                learn' link='/Choices'/>
  </div>
  
  );
};

export default Home;
