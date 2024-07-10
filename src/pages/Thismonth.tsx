import React, { useState, useEffect } from 'react';
import axios from 'axios';
import reactangleblock from "../assets/Rectangleblock.svg";
import hearticon from "../assets/love.svg";
import showicon from "../assets/showeicon.svg";
import rating from "../assets/rating.svg";
import lastframe from "../assets/lastframe.svg";
import "../pages/Thismonth.css";


interface Product {
  images: string;
  title: string;
  price: string;
  oldPrice: string;
}

function Thismonth() {
  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data.slice(0, 4)); 
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
      });
  }, []);

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

      <div style={{ display: "flex", justifyContent: "space-between" }} className='products-card'>
        {products.map((product, index) => (
          <div className='card' key={index}>
            <div className='icons'>
              <img src={hearticon} alt='heart icon' />
              <img src={showicon} alt='show icon' />
            </div>
            <div className='product-image'>
              <img className="image-hold" src={product.images} alt={product.images} />
            </div>
            <div className='thisdescription'>
              <div>{product.title}</div>
              <div>  {product.price} <b>$</b> <span></span></div>
              <img src={rating} alt='rating' />
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "30px" }} className="image-container">
        <img src={lastframe} alt='frame' />
      </div>
    </div>
  );
}

export default Thismonth;
