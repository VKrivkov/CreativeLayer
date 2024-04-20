import React, { useEffect, useState } from 'react';
import './MainPage.css'; // Ensure your CSS is correctly linked
import image1 from '../../assets/ShowImage1.png';
import image2 from '../../assets/ShowImage2.png';
import image3 from '../../assets/ShowImage3.png';
import image4 from '../../assets/ShowImage4.png';
import image5 from '../../assets/ShowImage5.png';
import image6 from '../../assets/ShowImage6.png';
import image7 from '../../assets/ShowImage7.png';
import image8 from '../../assets/ShowImage8.png';
import image9 from '../../assets/ShowImage9.png';
import image10 from '../../assets/ShowImage10.png';
import image11 from '../../assets/ShowImage11.png';
import image12 from '../../assets/ShowImage12.png';






const MainPage = () => {
  // Initial images array
  const images = [image1, image9, image5, image4, image3, image6, image7, image8, image10, image2, image11, image12];


  // State to track which images have been revealed
  const [revealed, setRevealed] = useState(Array(images.length).fill(false));
  const gridSizes = ['size-1', 'size-2', 'size-3', 'size-4']; // The possible sizes

  // Function to randomly assign a grid size to each image
  const getSize = (index) => {
    if (index<8)
      return gridSizes[index % 4];
    else if (index === 9)
      return 'size-3';
    else if (index === 10)
      return 'size-4';
    else if (index === 11)
      return 'size-3';
  }

  useEffect(() => {
    // Function to reveal images with a delay
    const revealImages = () => {
      images.forEach((_, index) => {
        setTimeout(() => {
          setRevealed(revealed => {
            const newRevealed = [...revealed];
            newRevealed[index] = true;
            return newRevealed;
          });
        }, index * 100);
      });
    
    };

    revealImages();


  }, [images.length]);

  return (
    <div className="main-page" id='home'>
      <header className='text-head'>
        <div className='main-page-headline'>
          <h2>PRINT</h2>
          <h1>YOUR</h1>
          <h3>IDEAS</h3>
        </div>
        <div className='main-page-fun'>
          <p>-Our 3d printing studio is here to print any of your ideas.</p> 
          <div className='two-things'>
            <p> -Any ideas?  </p>  
            <strong> -All of them.</strong>
          </div>
        </div>
      </header>
      <div className="imgBox">
        {images.map((image, index) => (
          <img
            key={index}
            className={`bento-image (${(index)}) ${getSize(index)} ${revealed[index] ? 'reveal' : ''}`}
            src={image}
            loading='lazy'
            alt={`3D printing image ${index + 1}`}
          />
        ))}
      </div>
      <div className='imgBox-medium'>
      {images.slice(0, 6).map((image, index) => (
          <img
            key={index}
            className={`bento-image (${(index)}) ${getSize(index)} ${revealed[index] ? 'reveal' : ''}`}
            src={image}
            loading='lazy'
            alt={`3D printing image ${index + 1}`}
          />
        ))}
      </div>
      <div className='imgBox-small'>
      {images.slice(0, 4).map((image, index) => (
          <img
            key={index}
            className={`bento-image (${(index)}) ${getSize(index)} ${revealed[index] ? 'reveal' : ''}`}
            src={image}
            loading='lazy'
            alt={`3D printing image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
