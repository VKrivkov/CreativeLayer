import React from 'react';
import './Gallery.css';
import GalleryComponent from './GalleryComponent';
import { images } from './images.js';

const Gallery = () => {

  return (
    <div id='gallery' className='gallery-container'>
      <div className='gallery-header'>
        <h1 className='headline-gallery'>Custom models</h1>
        <div className='text-block'>
          <p>Step right up to our team of design daredevils! We're not your average designers—we're here to turn your wildest dreams into design reality. Whether you're craving sleek and modern, classic and timeless, or something so unique it'll make heads spin, we've got the skills and creativity to make it happen. So, what's your design fantasy? Let's bring it to life together!</p>
        </div>
      </div>

      <GalleryComponent images={images}/>
    </div>
  );
};

export default Gallery;
