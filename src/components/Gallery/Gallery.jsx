import React from 'react';
import './Gallery.css';
import GalleryComponent from './GalleryComponent';
import { images } from './images.js';

const Gallery = () => {

  return (
    <div id='gallery' className='gallery-container'>
      <div className='how-heading'>
        <h2 className='headline-gallery'>Custom models</h2>
        <div className='text-block'>
          <p>If you need a custom 3D model, our designer in Cyprus is here to help. We'll work with you to shape your ideas into a ready-to-print 3D model, making adjustments to suit your preferences. Check out examples of our previous work below to see what we can achieve with our 3D Printing studio in Cyprus. Got questions? Feel free to reach out.</p>
        </div>
      </div>

      <GalleryComponent images={images}/>
    </div>
  );
};

export default Gallery;
