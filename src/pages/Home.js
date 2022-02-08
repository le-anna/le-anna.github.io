import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';

const Home = () => {
  return (
    <div className='Home'>
        <Landing/>
        <ProjectOverview/>
  </div>
  );
};

export default Home;
