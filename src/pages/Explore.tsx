import React from 'react';
import dogfoodimg from "../assets/dogfood.png";
import laptop from "../assets/laptop.png"
import hearticon from "../assets/love.svg";
import showicon from "../assets/showeicon.svg";
import rating from "../assets/rating.svg";
import reactangleblock from "../assets/Rectangleblock.svg"
import "../pages/Explore.css"

function Explore() {
  const products = [
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
    { image: dogfoodimg, name: "Breed Dry Dog Food", price: "$60", oldPrice: "$80" },
  ];

  return (

    <>
          <div className="explore-container">
          <div><div className='heading'>
          <img src={reactangleblock} alt='img' /> Our Products
      </div>
          <div className='main-sale'>
              <div className='flashsale'>
                  Explore Our Products
              </div>


          </div></div>

              <div className="products-card">

                  {products.map((product, index) => (
                      <div className="cardexplore" key={index}>
                          <div className="icons">
                              <img src={hearticon} alt="heart icon" />
                              <img src={showicon} alt="show icon" />
                          </div>
                          <div className="product-imageexplore">
                              <img src={product.image} alt={product.name} />
                          </div>
                          <div className="descriptionexplore">
                              <div>{product.name}</div>
                              <div>{product.price} <span>{product.oldPrice}</span></div>
                              <img src={rating} alt="rating" />
                          </div>
                      </div>
                  ))}
              </div>
              <div className='viewbtn'>
                  <p>View All Products</p>
              </div>
          </div></>
  );
}

export default Explore;
