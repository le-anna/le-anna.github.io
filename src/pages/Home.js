import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';
import GoToTop from '../components/GoToTop'


const Home = () => {
  return (
    <div className='Home'>
        <Landing/>
        <ProjectOverview type='Work' title='Choices' role='UX/UI Designer & Frontend Developer' 
                description='Design and implement the interface for Choices, an educational platform for individuals with Sickle Cell Disease or Traits' 
                link='/Choices' img='Choices'/>
        <ProjectOverview type='Work' title='CaSMM' role='Frontend Developer' description='Re-designed the interface for CaSMM, a block-based
                programming environment for K-12 students to learn how to code Arduinos' link='/CASMM' img='CASMM'/>
        <ProjectOverview type='Shadowing Program' role='Mentee'  title='Mental Health App' description='Developed Mental Health App with  Opie Software
                through the Women in Computer Science & Engineering (WiCSE) Shadowing Program' link='/MentalHealthApp' img='MHA'/>
         <ProjectOverview type='Hackathon' title='RetroFi' role='Team Member' description='Won Capital One category for development of retro-themed
                financial application at SwampHacks (University of Florida)' link='retrofi' img='retrofi'/>
        <GoToTop />
  </div>
  
  );
};

export default Home;
