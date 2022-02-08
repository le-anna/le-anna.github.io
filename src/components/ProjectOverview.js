import React from 'react';
import './ProjectOverview.css'

const ProjectOverview = ({title, type, description}) => {


  return (
    <div className='project-overview'>
      <div className='project-container'>
        <div className='prj-info-container'>
          <p className='type'>{type}</p>
          <h1 className='title'>{title}</h1>
          <p className='prj-description'>{description}</p>
        </div>
        <div className='prj-image-container'>
          <div className='prj-image'></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
