import React from 'react';
import Gallery from 'react-photo-gallery';
import { photos } from '../components/Photos.js';
import './Design.css'
import GoToTop from '../components/GoToTop'

const Design = () => {
  const BasicRows = () => <Gallery photos={photos} />;
  
  return <div className='design'>
    <div className='design-title'>UI Designs</div>
    <p className='design-info'>This is a gallery showcasing my UI designs; these were developed using Figma and have not been implemented. 
          For all UI designs that I have programmed, feel free to check out my projects under the Experiences tab!
    </p>    
    <div className='design-gallery'>
      <BasicRows />
    </div>
    <GoToTop />
  </div>
};

export default Design;
