import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './ProjectOverview.css'
import CASMM from '../assets/CASMM/casmm_logo.png'
import MHA from '../assets/MHA/MHA.png'
import retrofi from '../assets/retrofi.png'

const ProjectOverview = ({title, role, type, description, link, img}) => {


  return (
    <div className='project-overview'>
      <div className='project-container'>
        <div className='prj-info-container'>
          <p className='type'>{type}</p>
          <h1 className='title'>{title}</h1>
          <p className='prj-role'>{role}</p>
          <p className='prj-description'>{description}</p>
          <div className ='prj-link-container'>
            {
              link === 'retrofi' ? <a href='https://devpost.com/software/retrofi' className='prj-button'>Link</a> :
              <Link to={link} className='prj-button'>Read More</Link>
            }
          </div>
        </div>
        <div className='prj-image-container'>
          {
            img === 'CASMM' ? <img src={CASMM} className='prj-img'/> : 
            img === 'retrofi' ? <img src={retrofi} className='prj-img'/> : 
            img === 'MHA' ? <img src={MHA} className='prj-img'/> : 
            <div className='choices-status'>Currently in UX design process</div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
