import React , { useState }  from 'react'
import './GalleryComponent.css'
import currPage  from '../../assets/CurrentPage.svg';
import otherPage  from '../../assets/OtherPage.svg';
import arrowLeft from '../../assets/ArrowLeft.svg';
import arrowRight from '../../assets/ArrowRight.svg';

const GalleryComponent = ({images}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  // Helper function to get the slide class
  const getSlideClass = (index) => {
    if (index === currentSlide) return 'slide active'; // updated to match CSS class
    if (index === currentSlide - 1 || (currentSlide === 0 && index === images.length - 1)) return 'slide prev'; // updated to match CSS class
    if (index === currentSlide + 1 || (currentSlide === images.length - 1 && index === 0)) return 'slide next'; // updated to match CSS class
    return 'slide'; // this will be the default class for non-active slides
  };

  return (
    <div>
         <div className="gallery-slider">

            <button onClick={prevSlide} className="arrowLeft">
            <img src={arrowLeft} alt="Previous Slide" />
            </button>

            {images.map((src, index) => (
            <div className={getSlideClass(index)} key={index}>
                <img src={src} alt={`Slide ${index}`} className="gallery-image" />
            </div>
            ))}

            <button onClick={nextSlide} className="arrowRight">
            <img src={arrowRight} alt="Next Slide" />
            </button>

            </div>


            <div className="gallery-pagination">
            {images.map((_, index) => (
            <div 
                key={index} 
                className={index === currentSlide ? 'pagination-dotActive' : 'pagination-dot'}>
                <img src={index === currentSlide ? currPage : otherPage} alt="Pagination Dot" />
            </div>
            ))}
            </div>

    </div>
  )
}

export default GalleryComponent