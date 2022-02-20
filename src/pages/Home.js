import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';
import GoToTop from '../components/GoToTop'


const Home = () => {
  return (
    <div className='Home'>
        <Landing/>
        <ProjectOverview type='Work' title='Choices' role='UX/UI Designer & Frontend Developer' 
                description='Design and implement the website for 
                Choices, an educational platform for individuals with Sickle Cell Disease or Traits to 
                learn' link='/Choices' img='Choices'/>
        <ProjectOverview type='Work' title='CaSMM' role='Frontend Developer' description='Re-designed the interface for CaSMM, a block-based
                programming environment for K-12 students to learn how to code Arduinos' link='/CASMM' img='CASMM'/>
        <ProjectOverview type='Shadowing Program' role='Mentee'  title='Mental Health App' description='Developed Mental Health App with  Opie Software
                through the Women in Computer Science Engineering (WiCSE) Shadowing Program' link='/MentalHealthApp' img='MHA'/>
        
        <GoToTop />
  </div>
  
  );
};

export default Home;
