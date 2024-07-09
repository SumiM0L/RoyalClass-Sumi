import React, { useState } from 'react';
import "../pages/Home.css";
import banerimage from "../assets/bannerframe.svg";
import arrow from "../assets/arrowforwared.svg";

function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='main-container'>
      <div className='line'></div>
      <div className="event-dashboard-container">
        <div className="accordion-wrapper">
          {accordionData.map((item, index) => (
            <div className="accordion" key={index}>
              <h3
                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => handleAccordionClick(index)}
              >
                {item.title === "Woman’s Fashion" || item.title === "Men’s Fashion" ? (
                  <>
                    {item.title}
                    <img
                      src={arrow}
                      alt='arrow'
                      className={`arrow ${activeIndex === index ? 'expanded' : ''}`}
                    />
                  </>
                ) : (
                  item.title
                )}
              </h3>
              <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                {item.content}
              </div>
            </div>
          ))}
        </div>
        <div className="banner-session">
          <img src={banerimage} alt='banner' />
        </div>
      </div>
    </div>
  );
}

const accordionData = [
  { title: "Woman’s Fashion", content: "Content for Woman’s Fashion" },
  { title: "Men’s Fashion", content: "Content for Men’s Fashion" },
  { title: "Electronics", content: "Content for Electronics" },
  { title: "Home & Lifestyle", content: "Content for Home & Lifestyle" },
  { title: "Sports & Outdoor", content: "Content for Sports & Outdoor" },
  { title: "Baby’s & Toys", content: "Content for Baby’s & Toys" },
  { title: "Groceries & Pets", content: "Content for Groceries & Pets" },
  { title: "Health & Beauty", content: "Content for Health & Beauty" },
];

export default Home;
