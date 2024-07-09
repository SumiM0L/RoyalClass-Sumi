import React from 'react';
import reactangleblock from "../assets/Rectangleblock.svg";
import hearticon from "../assets/love.svg";
import showicon from "../assets/showeicon.svg";
import dress from "../assets/dress.png";
import bag from "../assets/bag.png";
import speaker from "../assets/speaker.png";
import bookself from "../assets/bookself.png";
import rating from "../assets/rating.svg"
import lastframe from "../assets/lastframe.svg"
import "../pages/Thismonth.css"

function Thismonth() {
  const products = [
    { image: dress, name: "HAVIT HV-KB432L Keyboard", price: "$60", oldPrice: "$80" },
    { image: bag, name: "HAVIT HV-KB432L Keyboard", price: "$60", oldPrice: "$80" },
    { image: speaker, name: "HAVIT HV-KB432L Keyboard", price: "$60", oldPrice: "$80" },
    { image: bookself, name: "HAVIT HV-KB432L Keyboard", price: "$60", oldPrice: "$80" }
  ];

  return (
    <div className='today-container'>
      <div className='heading'>
        <img src={reactangleblock} alt='img' /> This Month
      </div>

      <div className='main-sale'>
        <div className='flashsale'>
          Best Selling Products
        </div>

        <div className='viewbtn'>
          <p>View All</p>
        </div>
      </div>

      <div  style={{display:"flex",justifyContent:"space-between"}}className='products-card'>
        {products.map((product, index) => (
          <div className='card' key={index}>
            <div className='icons'>
              <img src={hearticon} alt='heart icon' />
              <img src={showicon} alt='show icon' />
            </div>
          <div className='product-image'>  <img className="image-hold" src={product.image} alt={product.name} /></div>
            <div className='thisdescription'>
              <div>{product.name}</div>
              <div>{product.price} <span>{product.oldPrice}</span></div>
              <img src={rating} alt='rating' />
            </div>
          </div>
        ))}
      </div>
      <div  style={{marginTop:"30px"}}className="image-container">
  <img src={lastframe} alt='frame' />
</div>

    </div>
  );
}

export default Thismonth;
