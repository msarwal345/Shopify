import React from 'react'
import './Herosec.css'
import Button from 'react-bootstrap/Button';
export default function HeroSec() {
  return (
    <div className='container' >
      <div className='leftside'><h1>Your Comfort</h1>
      <h1>Zone Begins</h1>
      <h1>With Shopify</h1>

     <p>Find the latest trends, unique fashion, and unbeatable  </p>
     <p> deals all in one place. Explore our curated collection of </p>
     <p>clothing, accessories,and more, handpicked just for you. </p>
     <p>Elevate your wardrobe and embrace the fashion that defines you.</p>
     <Button style={{marginTop:'30px'}}variant="outline-dark">Shop Now</Button>
      </div>
      <div className='rightside'>
      <img height='350px' width='450px' src='clothes.avif' alt='Clothes' ></img>
      </div>
    </div>
  )
}
