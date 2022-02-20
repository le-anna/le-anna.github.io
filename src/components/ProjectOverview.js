import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import './ProjectOverview.css'
import CASMM from '../assets/CASMM/casmm_logo.png'
import MHA from '../assets/MHA/MHA.png'

const ProjectOverview = ({title, role, type, description, link, img}) => {
  const [casmm, setCasmm] = useState(false);
  const [mha, setMha] = useState(false);
  const [choices, setChoices] = useState(false);


  const checkImg = () => {
    if (img == 'CASMM') {
      setCasmm(true);
    } else if (img == 'MHA') {
      setMha(true);
    } else if (img == 'Choices') {
      setChoices(true);
    }
  }

  return (
    <div className='project-overview'>
      <div className='project-container'>
        <div className='prj-info-container'>
          <p className='type'>{type}</p>
          <h1 className='title'>{title}</h1>
          <p className='prj-role'>{role}</p>
          <p className='prj-description'>{description}</p>
          <div className ='prj-link-container'>
            <Link to={link} className='prj-button'>Read More</Link>
          </div>
        </div>
        <div className='prj-image-container'>
          {
            img === 'CASMM' ? <img src={CASMM} className='prj-img'/> : 
            img === 'MHA' ? <img src={MHA} className='prj-img'/> : null
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
