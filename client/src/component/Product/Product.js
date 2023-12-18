import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../cartcontext/cartcontext'

export default function Product() {
  const [data, setData] = useState([]);
  const { cart, addToCart } = useCart();
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <div className='display-4 text-center'>Latest Products</div>
          <hr />
        </div>
        <div className='container my-3 py-3'>
          <div className='row justify-content-center'>
            {data.map((item) => (
              <div className='col-12 col-md-4' key={item.id}>
                <div className='card mb-4'>
                  <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img height={350} src={item.image} className='card-img-top' alt={item.title} />
                    <div className='card-body'>
                      <h5>{item.title.substring(0, 12)}...</h5>
                      <p>{item.description.substring(0, 90)}...</p>
                      <p>Price:${item.price}</p>
                    </div>
                  </Link>
                  <div className='card-body'>
                    <Link to={`/product/${item.id}`} className='btn btn-dark m-1'>
                      Buy Now
                    </Link>
                    <button className='btn btn-dark m-1'  onClick={() => addToCart(item)} >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use the Cart component */}
    
    </>
  );
}
