import React, { useRef } from 'react';
import reactangleblock from "../assets/Rectangleblock.svg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../pages/Today.css";

import hearticon from "../assets/love.svg"
import showicon from "../assets/showeicon.svg"
import gamepad  from "../assets/gamepad.svg"
import keyboard from "../assets/keyboard.svg"
import mointor from "../assets/monitor.svg"
import chair from "../assets/chair.svg"
import rating from "../assets/rating.svg"
import arrowleft from "../assets/arrow-left.svg"
import arrowright from "../assets/arrow-right.svg"

function Today() {
  const sliderRef = useRef<Slider>(null); // Ensure ref is initialized with null

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards per row
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
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Check if sliderRef.current is defined
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Check if sliderRef.current is defined
    }
  };

  return (
    <div className='today-container'>
      <div className='heading'>
        <img src={reactangleblock} alt='img' /> Today’s
      </div>
      <div className='main-sale'>

  <div style={{display:"flex", justifyContent:"center", alignItems:"center",gap:"40px"}}><div className='flashsale'>
    <div>Flash Sales</div>
  </div>
  <div className='time-column'>
    <div className='time'>
      <div className='timeo'>Days</div>
      <div className='count'>03</div>
    </div>
    <div className='colon'>:</div>
    <div className='time'>
      <div className='timeo'>Hours</div>
      <div className='count'>23</div>
    </div>
    <div className='colon'>:</div>
    <div className='time'>
      <div className='timeo'>Minutes</div>
      <div className='count'>19</div>
    </div>
    <div className='colon'>:</div>
    <div className='time'>
      <div className='timeo'>Seconds</div>
      <div className='count'>56</div>
    </div>
  </div></div>

  <div className='sliderarrow'>
    <div onClick={prevSlide}><img src={arrowleft} alt='arrowicon' /></div>
    <div onClick={nextSlide}><img src={arrowright} alt='arrowicon' /></div>
  </div>
</div>


      <div className='slider-container'>
        <Slider ref={sliderRef} {...sliderSettings}>
          {/* Card 1 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>

          {/* Card 2 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>

          {/* Card 3 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>

          {/* Card 4 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>
          {/* Card 5 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>
          {/* card6 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>
          {/* card7 */}
          <div>
            <div className='card'>
              <div className='card-text'>-35%</div>
              <div className='icons'>
                <span> <img src={hearticon} alt='icon'></img> </span>
                <span> <img src={showicon} alt='icon'></img> </span>
              </div>
              <img className='gamepad' src={gamepad} alt='gameImage' />
              <div className='description'><div>HAVIT HV-KB432L Keyboard</div>
              <div>$60 <span>$80</span></div>
              <img src={rating} alt='rating'></img></div>
            </div>
          </div>
        </Slider>
      </div>
      <div className='viewbtn'> <p>View All Products</p></div>
      <div className='line'></div>
    </div>
    
  );
}

export default Today;
