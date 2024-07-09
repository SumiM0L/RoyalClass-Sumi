import React from 'react'
import reactangleblock from "../assets/Rectangleblock.svg"
import "../pages/Featured.css"
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"

export default function Featured() {
  return (

    <div className='mainfeature-container'> 
    <div className='heading'>
        <img src={reactangleblock} alt='img' /> OFeatured
      </div>
    <div className='main-sale'>
        <div className='flashsale'>
        New Arrival
        </div>

        
       

        
      </div>
      <div className='image-container'>
    <div className='row'>
        <div className='column'>
            <img src={one} alt='image' />
        </div>
        <div className='column right-column'>
            <div className='row'>
                <div className='column'>
                    <img src={two} alt='image' />
                </div>
            </div>
            <div className='row'>
                <div className='column'>
                    <img src={three} alt='image' />
                </div>
                <div className='column'>
                    <img src={four} alt='image' />
                </div>
            </div>
        </div>
    </div>
</div>

      </div>
  )
}
