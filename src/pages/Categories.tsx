import React, { useRef } from 'react';
import Slider from 'react-slick';
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import phone from "../assets/phone.png";
import computr from "../assets/computr.png";
import smartwatch from "../assets/smartwatch.png";
import camera from "../assets/camera.png";
import headphone from "../assets/headphone.png";
import gamee from "../assets/gamee.png";
import reactangleblock from "../assets/Rectangleblock.svg"

function Categories() {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 cards per row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current && typeof sliderRef.current.slickNext === 'function') {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current && typeof sliderRef.current.slickPrev === 'function') {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='today-container'>
      <div className='heading'>
        <img src={reactangleblock} alt='img' /> Today’s
      </div>

      <div className='main-sale'>
        <div className='flashsale'>
          Browse By Category
        </div>

        <div className='sliderarrow'>
          <div onClick={prevSlide}><img src={arrowleft} alt='arrowicon' /></div>
          <div onClick={nextSlide}><img src={arrowright} alt='arrowicon' /></div>
        </div>
      </div>

      <div className='slider-container'>
        <Slider ref={sliderRef} {...sliderSettings}>
          {/* Card 1 */}
          <div>
            <div className='cardc'>
              <img src={phone} alt='phone' />
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className='cardc'>
              <img src={computr} alt='computer' />
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className='cardc'>
              <img src={smartwatch} alt='smartwatch' />
            </div>
          </div>

          {/* Card 4 */}
          <div>
            <div className='cardc'>
              <img src={camera} alt='camera' />
            </div>
          </div>

          {/* Card 5 */}
          <div>
            <div className='cardc'>
              <img src={gamee} alt='game' />
            </div>
          </div>

          {/* Card 6 */}
          <div>
            <div className='cardc'>
              <img src={headphone} alt='headphone' />
            </div>
          </div>
        </Slider>
      </div>

      <div className='viewbtn'>
        <p>View All Products</p>
      </div>

      <div className='line'></div>
    </div>
  );
}

export default Categories;
