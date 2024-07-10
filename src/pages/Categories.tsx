import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios'; 
import arrowleft from "../assets/arrow-left.svg";
import arrowright from "../assets/arrow-right.svg";
import reactangleblock from "../assets/Rectangleblock.svg"; 

function Categories() {
  const sliderRef = useRef<any>(null); 
  const [categories, setCategories] = useState<any[]>([]); 

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://api.escuelajs.co/api/v1/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const nextSlide = () => {
    if (sliderRef.current && typeof sliderRef.current?.slickNext === 'function') {
      sliderRef.current?.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current && typeof sliderRef.current?.slickPrev === 'function') {
      sliderRef.current?.slickPrev();
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
          
          {categories && categories.map((category: any) => (
  <div key={category.id}>
    <div style={{marginLeft:"10px"}} className='cardc'>
      <img
        src={category.image}
        alt={category.name}
        onError={(e) => {
        }}
      />
    </div>
  </div>
))}

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
