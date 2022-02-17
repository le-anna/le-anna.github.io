import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectOverview.css'

const ProjectOverview = ({title, type, description, link}) => {


  return (
    <div className='project-overview'>
      <div className='project-container'>
        <div className='prj-info-container'>
          <p className='type'>{type}</p>
          <h1 className='title'>{title}</h1>
          <p className='prj-description'>{description}</p>
          <div className ='prj-link-container'>
            <Link to={link} className='prj-button'>Read More</Link>
          </div>
        </div>
        <div className='prj-image-container'>
          <div className='prj-image'></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
