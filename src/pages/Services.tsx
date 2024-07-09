import React from 'react'
import one from "../assets/serone - Copy.png"
import two from "../assets/sertwo.png"
import three from "../assets/Services.png"
import "../pages/Services.css"

function Services() {
  return (
    <div className='service-container'>
    <div className='service-item'>
        <img src={one} alt='Service Image' />
        <p><b>FREE AND FAST DELIVERY</b></p>
        <p>Free delivery for all orders over $140</p>
    </div>

    <div className='service-item'>
        <img src={one} alt='Service Image' />
        <p><b>Friendly 24/7 customer support</b></p>
        <p>Friendly 24/7 customer support</p>
    </div>

    <div className='service-item'>
        <img src={one} alt='Service Image' />
        <p><b>MONEY BACK GUARANTEE</b></p>
        <p>We reurn money within 30 days</p>
    </div>
</div>


  )
}

export default Services