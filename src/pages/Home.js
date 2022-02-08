import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div className='Home'>
        <Landing/>
        <ProjectOverview type='Work' title='CaSMM' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
        <ProjectOverview type='Work' title='Choices' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
        <ProjectOverview type='Shadowing Program' title='Mental Health App' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'/>
  </div>
  
  );
};

export default Home;
