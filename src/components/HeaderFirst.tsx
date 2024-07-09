import React from 'react'
import "./../components/HeaderFirst.css"
import downarrow from "../assets/downarrow.svg"

function HeaderFirst() {
  return (
    <div className='main-coontainer'>
        <p className='text-one'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span style={{marginLeft:"10px"}}><b><u>ShopNow</u></b></span></p>
        <div className='language'> English <span> <img src={downarrow} alt='downarrow'></img></span></div>
    </div>
  )
}

export default HeaderFirst
