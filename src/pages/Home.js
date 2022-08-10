import React from 'react';
import ProjectOverview from '../components/ProjectOverview';
import Landing from '../components/Landing';
import GoToTop from '../components/GoToTop'
import './Home.scss'

const Home = () => {
  return (
    <div className='Home'>
        <Landing/>
        <div id='projects'>
                <ProjectOverview className="test" title='Choices' role='UX Designer & Frontend Developer' 
                        description='Design and implement the interface for Choices, an educational platform for people with Sickle Cell Disease or Traits' 
                        tech='JavaScript, HTML, CSS (Sass)' link='/Choices' img='Choices'/>
                <ProjectOverview title='CaSMM' role='Frontend Developer' description='Improved interface for CaSMM, a block-based
                        programming environment for K-12 students to learn how to code Arduinos' tech='React, CSS (Less)' link='/CASMM' img='CASMM'/>
                <ProjectOverview title='Mental Health App' role='Shadowing Program Mentee' description='Developed Mental Health App with  Opie Software
                        through the Women in Computer Science & Engineering (WiCSE) Shadowing Program' tech='Java, React Native, Hibernate, Spring Boot, SQL'
                        link='/MentalHealthApp' img='MHA'/>
                <ProjectOverview className="test" title='RetroFi' role='Hackthon Team Member' description='Won Capital One category for development of retro-themed
                        financial application at SwampHacks (University of Florida)' tech='React, CSS' link='retrofi' img='retrofi'/>
                </div>
       
        <GoToTop />
  </div>
  
  );
};

export default Home;
