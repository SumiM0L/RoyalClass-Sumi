import React from 'react'
import logo from "../assets/royalclass-logo.svg"
import searchicon from "../assets/searchicon.svg"
import wishicon from "../assets/wish.svg"
import carticon from "../assets/cart.svg"
import "./Header.css"

function Header() {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src={logo} alt='logo' />
      </div>
      <div className='navigation-container'>
        <div>Home</div>
        <div>Contact</div>
        <div>About</div>
        <div>Sign Up</div>
      </div>
      <div className='looking-for'>
        <div className='search'>
          <div>What are you looking for?</div>
          <img src={searchicon} alt='search-icon' />
        </div>
        <div className='wishlist'>
          <img src={wishicon} alt='wishlist-icon' />
        </div>
        <div className='cart'>
          <img src={carticon} alt='cart-icon' />
        </div>
      </div>
    </div>
  )
}

export default Header
