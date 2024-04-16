import React from 'react';
import './Gallery.css';
import GalleryComponent from './GalleryComponent';
import { images } from './images.js';

const Gallery = () => {

  return (
    <div id='gallery' className='gallery-container'>
      <div className='how-heading'>
        <h1 className='headline-gallery'>Custom models</h1>
        <div className='text-block'>
          <p>Our designer will help bring your ideas to life and adjust models according to your preferences. Examples of his work are below.</p>
        </div>
      </div>

      <GalleryComponent images={images}/>
    </div>
  );
};

export default Gallery;
